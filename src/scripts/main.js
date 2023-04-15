function main() {
    const baseUrl = 'https://fakestoreapi.com';

    const getProduct = () => {
        fetch(`${baseUrl}/products`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderAllProducts(responseJson.products);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            });
    };


    const insertProduct = (product) => {
        fetch(`${baseUrl}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                showResponseMessage(responseJson.message);
                getProduct();
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const updateProduct = (product) => {
        fetch(`${baseUrl}/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                showResponseMessage(responseJson.message)
                getProduct();
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const removeProduct = (productId) => {
        fetch(`${baseUrl}/products/${productId}`, {
            method: 'DELETE',
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                showResponseMessage(responseJson.message);
                getProduct();
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };



    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllProducts = (products) => {
        const listProductElement = document.querySelector('#listProduct');
        listProductElement.innerHTML = '';

        products.forEach(product => {
            listProductElement.innerHTML += `
          <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${product.id}. ${product.title}</h4>
                    <h5 class="card-text">${product.category}</h4>
                    <h2 class="card-text">${product.price}</h2>
                    <button type="button" class="btn btn-outline-danger button-delete" id="${product.id}">Hapus</button>
                </div>
            </div>
          </div>
        `;
        });

        const buttons = document.querySelectorAll('.button-delete');
        buttons.forEach(button => {
            button.addEventListener('click', event => {
                const productId = event.target.id;

                removeProduct(productId);
            });
        });
    };

    const showResponseMessage = (message = 'Ups, ada sesuatu yang bermasalah') => {
        alert(message);
    };

    document.addEventListener('DOMContentLoaded', () => {

        const inputProductId = document.querySelector('#inputProductId');
        const inputProductTitle = document.querySelector('#inputProductTitle');
        const inputProductCategory = document.querySelector('#inputProductCategory');
        const inputProductImage = document.querySelector('#inputProductImage');
        const inputProductPrice = document.querySelector('#inputProductPrice');
        const buttonSave = document.querySelector('#buttonSave');
        const buttonUpdate = document.querySelector('#buttonUpdate');

        buttonSave.addEventListener('click', function () {
            const product = {
                id: Number.parseInt(inputProductId.value),
                image: inputProductImage.value,
                title: inputProductTitle.value,
                category: inputProductCategory.value,
                price: inputProductPrice.value
            };

            insertProduct(product);
        });

        buttonUpdate.addEventListener('click', function () {
            const product = {
                id: Number.parseInt(inputProductId.value),
                image: inputProductImage.value,
                title: inputProductTitle.value,
                category: inputProductCategory.value,
                price: inputProductPrice.value
            };

            updateProduct(product);
        });
        getProduct();
    });
}

export default main;