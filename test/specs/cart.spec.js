import {expect,browser} from '@wdio/globals'
import cartObj from '../pageobjects/cartObj.js'
import detailProductPage from '../pageobjects/detailProductObj.js'

describe('Fitur Cart', function (){
    before('User harus berada pada halaman cart dan sudah menambahkan item', async function(){
        await detailProductPage.openPage2()
        await detailProductPage.clickchartButton()
        expect(browser).toHaveElementClass(detailProductPage.cbPopup) //test apakah browser memunculkan class ini (pop-up keranjang)
        const prodName = await detailProductPage.getProdNameInPopup() //ambil judul dari pop up yang muncul, memastikan judul produk sesuai
        expect (prodName).toHaveText('Printed Short Sleeve Shirt') //memastikan judulnya sesuai
        await detailProductPage.clickchartButtonFinal() // klik button pada pop-up
        expect (browser).toHaveUrl('https://executive.co.id/cart') // memastikan masuk ke halaman keranjang

    })
    it.only('Cek Tambah Jumlah QTY', async function(){ //tanya mas abid deh
        await cartObj.openPage2()
        await cartObj.clickaddButton()
        // expect(cartObj.qtyInput).toHaveHref("/cart/change?line=1&quantity=4")
        //const jumlahHarga = await cartObj.getTotal()
        const jumlahInput = await cartObj.getValueqtyInput()
        expect(jumlahInput).toHaveValue('5')
    })
    it('Cek Button CheckOut', async function(){ // PASSED 8
        await cartObj.openPage2()
        await cartObj.clickcoButton()
        await cartObj.clickKirimPaket()
        await cartObj.clickBtnCO()
        expect (browser).toHaveUrl('https://executive.co.id/account/login?checkout_url=%2Fcheckouts%2Fcn%2FZ2NwLWFzaWEtc291dGhlYXN0MTowMUhaTUFERTMwMjdaU1MwMlJHMzY5UTlQUQ%3F_ga%3D2.109517184.403293398.1717595056-189237771.1717595056%2526_gac%253D1.52448986.1717608484.CjwKCAjwmYCzBhA6EiwAxFwfgAuu7PL3kugn-6CCEFc3hd-IfK2zjYKowBM6crRfRdNi8hQQptnYnRoCNtYQAvD_BwE%26locale%3Did-ID')
    })
    it('Cek Link Lanjut Belanja', async function(){ //PASSED 9
        await cartObj.openPage2()
        await cartObj.clickLanjutBelanja
        expect (browser).toHaveUrl('https://executive.co.id/collections/all-voucher-collection')
    })
    
})