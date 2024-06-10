import {expect,browser} from '@wdio/globals'
import cartObj from '../pageobjects/cartObj.js'
import detailProductPage from '../pageobjects/detailProductObj.js'

describe('Fitur Cart', function (){
    before('User harus berada pada halaman cart dan sudah menambahkan item', async function(){
        await browser.setWindowSize(1366, 768)
        await detailProductPage.openPage2()
        await detailProductPage.clickchartButton()
        // expect(browser).toHaveElementClass(detailProductPage.cbPopup) //test apakah browser memunculkan class ini (pop-up keranjang)
        const prodName = await detailProductPage.getProdNameInPopup() //ambil judul dari pop up yang muncul, memastikan judul produk sesuai
        expect (prodName).toBe('Printed Short Sleeve Shirt') //memastikan judulnya sesuai
        await detailProductPage.clickchartButtonFinal() // klik button pada pop-up
        const prodNameCart = await cartObj.getProdNameCart()
        expect (prodNameCart).toBe('Printed Short Sleeve Shirt') // tidak bisa pakai tohavetext, kalo textnya beda, tetap jalan
        expect (browser).toHaveUrl('https://executive.co.id/cart') // memastikan masuk ke halaman keranjang
    })
    it('Cek Tambah Jumlah QTY', async function(){ //tanya mas abid deh SOLVED SUBHANALLAH ALLAHUAKBARRR PASSSSSEEEED 10
        await cartObj.openPage2()
        let jmlawal = await cartObj.getValueqtyInput()
        await cartObj.clickaddButton()
        let jumlahInput = await cartObj.getValueqtyInput()
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',jumlahInput)
        expect(jumlahInput).toEqual(jmlawal+1)
    })
    it('Cek Kurang Jumlah QTY', async function(){ //tanya mas abid deh SOLVED SUBHANALLAH ALLAHUAKBARRR PASSSSSEEEED 11
        // await cartObj.openPage2()
        let jmlawal2 = await cartObj.getValueqtyInput()
        await cartObj.clickDecButton()
        let jumlahakhir = await cartObj.getValueqtyInput()
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',jumlahInput)
        expect(jumlahakhir).toEqual(jmlawal2-1)
    })
    it('Cek Button CheckOut', async function(){ // PASSED 12
        await cartObj.openPage2()
        await cartObj.clickcoButton()
        await cartObj.clickKirimPaket()
        await cartObj.clickBtnCO()
        expect (browser).toHaveUrl('https://executive.co.id/account/login?checkout_url=%2Fcheckouts%2Fcn%2FZ2NwLWFzaWEtc291dGhlYXN0MTowMUhaTUFERTMwMjdaU1MwMlJHMzY5UTlQUQ%3F_ga%3D2.109517184.403293398.1717595056-189237771.1717595056%2526_gac%253D1.52448986.1717608484.CjwKCAjwmYCzBhA6EiwAxFwfgAuu7PL3kugn-6CCEFc3hd-IfK2zjYKowBM6crRfRdNi8hQQptnYnRoCNtYQAvD_BwE%26locale%3Did-ID')
    })
    it('Cek Link Lanjut Belanja', async function(){ //PASSED 13
        await cartObj.openPage2()
        await cartObj.clickLanjutBelanja
        expect (browser).toHaveUrl('https://executive.co.id/collections/all-voucher-collection')
    })
    it.only('Cek Hapus Item', async function(){ //PASSED 14
        await cartObj.openPage2()
        await cartObj.clickRemove()
        await cartObj.clickAlert()
        let del1 = await cartObj.prodNameCart.isDisplayed()
        let cartkosong = await cartObj.getKeterangan()
        expect (cartkosong).toBe('Keranjang Anda saat ini kosong.')
        expect (del1).toBe(false)
    })
})