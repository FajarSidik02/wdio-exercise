import {$,browser} from '@wdio/globals'

class detailProductPage {
    //selector
    get product() { return $('#AjaxinateLoop > div > div:nth-child(2) > div > div > div.product-info > div > div > a')}
    get prodName() { return $('h3.title')}    
    get pageBefore() {return $('.breadcrumbs-prod-nav__link--prev')}
    get pageAfter() {return $('.breadcrumbs-prod-nav__link--next')}
    get sizeChart() {return $('.size-chart-link')}
    get scPopUp() {return $('.customization_popup_container')}
    get ukuranTubuh(){return $('#sizePakaian')}
    get addQty() {return $('#product-form-template--15155899367586__main-8365683540130 > div.quantity-submit-row.input-row > div.quantity-wrapper > a:nth-child(3)')}
    get minQty() {return $('#product-form-template--15155899367586__main-8365683540130 > div.quantity-submit-row.input-row > div.quantity-wrapper > a:nth-child(1)')}
    get qty() {return $('#quantity')}
    get wishlist() {return $('#wishlisticon')} //menggunakan id (1/1)
    get sizeM() {return $('.opt---m')} //menggunakan class unique (1/1)
    get cartButton() {return $('button.button--large.add-to-cart')}
    get cbPopup() {return $('.cart-summary-overlay')}
    get cartButtonFinal() {return $('a.button.to-cart')}
    get prodNameinPopup() {return $('.cart-summary-overlay__title')}
    //action
    async clickProduct(){
        await this.product.click()
    }
    async getProdName(){
        await this.prodName.getText()
        return this.prodName
    }
    async clickPageBefore(){
        await this.pageBefore.click()
    }
    async clickPageAfter(){
        await this.pageAfter.click()
    }
    async clickSizeChart(){
        await this.sizeChart.click()
    }
    async clickaddQty(){
        await this.addQty.click()
    }
    async clickminQty(){
        await this.minQty.click()
    }
    async clickaddWhishlist(){
        await this.wishlist.click()
    }
    async clicksizeM(){
        await this.sizeM.click()
    }
    async clickchartButton(){
        await this.cartButton.click()
    }
    async clickchartButtonFinal(){
        await this.cartButtonFinal.click()
    }
    async getProdNameInPopup(){
        await this.cartButtonFinal.getText()
    }




    async openPage1(){
        await browser.url('https://executive.co.id/collections/men-shirts')
    }
    async openPage2(){
        await browser.url('https://executive.co.id/collections/men-shirts/products/printed-short-sleeve-shirt-24c425-lt-blue')
    }
}

export default new detailProductPage()