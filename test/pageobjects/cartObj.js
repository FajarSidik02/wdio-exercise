import {$,browser} from '@wdio/globals'

class cartObject{
    //object
    get addButton() { return $('#updates_inc_1')}
    // get addButton() { return $('.cart-item__quantity-input')}
    get cartButton() {return $('.cart-link__icon')}
    // get qtyInput() {return $('.cart-item__quantity-input')}
    get qtyInput() {return $('#updates_1')}
    get total() {return $('h2.subtotal.h2-style')}
    get coButton() {return $('.btnsubmit')}
    get kirimPaket() {return $('#boxcheckreg')}
    get btnCO() {return $('#btncheckout')}
    get lanjutBelanja() {return $('.continue-shopping')}
    //action
    async clickaddButton(){
        await this.addButton.click()
    }
    async clickcartButton(){
        await this.cartButton.click()
    }
    async getValueqtyInput(){
        await this.qtyInput.getValue()
    }
    async getTotal() {
        await this.total.getHTML()
    }
    async clickcoButton(){
        await this.coButton.click()
    }
    async clickKirimPaket(){
        await this.kirimPaket.click()
    }
    async clickBtnCO(){
        await this.btnCO.click()
    }
    async clickLanjutBelanja(){
        await this.lanjutBelanja.click()
    }
    



    async openPage1(){
        // await browser.url('https://executive.co.id/collections/men-shirts')
        await browser.url ('https://executive.co.id/collections/men-shirts/products/printed-short-sleeve-shirt-24c425-lt-blue')
    }
    async openPage2(){
        await browser.url('https://executive.co.id/cart')
    }
}

export default new cartObject()