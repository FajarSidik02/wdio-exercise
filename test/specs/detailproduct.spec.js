import {expect,browser} from '@wdio/globals'
import detailProductPage from '../pageobjects/detailProductObj.js'

// browser.setWindowSize(1366, 768)
describe('Fitur Detail Produk', function (){
    before('User harus berada pada halaman beranda', async function(){
        await detailProductPage.openPage1()
        await detailProductPage.clickProduct()
        await expect(browser).toHaveUrl('https://executive.co.id/collections/men-shirts/products/printed-short-sleeve-shirt-24c425-lt-blue')
    })
    it('Cek Nama Produk', async function(){ //1 PASSED
        await detailProductPage.openPage2()
        const namaProd = await detailProductPage.getProdName()
        expect(namaProd).toHaveTitle('Short Sleeve Knit Shirt')
    })
    it('Cek Panduan Ukuran', async function(){ //2 //PASSED
        await detailProductPage.openPage2()
        await detailProductPage.clickSizeChart()
        expect (browser).toHaveElementClass(detailProductPage.scPopUp)
        expect (detailProductPage.scPopUp).toHaveId(detailProductPage.ukuranTubuh)
    })
    it('Cek Halaman Sebelum', async function(){ //3 PASSED
        await detailProductPage.openPage2()
        await detailProductPage.clickPageBefore()
        expect(browser).toHaveUrl('https://executive.co.id/collections/men-shirts/products/short-sleeve-knit-shirt-24f172-navy')
    })
    it('Cek Halaman Setelah', async function(){ //4 PASSED
        await detailProductPage.openPage2()
        await detailProductPage.clickPageBefore()
        expect(browser).toHaveUrl('https://executive.co.id/collections/men-shirts/products/long-sleeve-utility-shirt-24c421-black')
    })
    it.skip('Cek Add Quantity Product', async function(){ //5 
        await detailProductPage.openPage2()
        await detailProductPage.clickaddQty()
        expect(detailProductPage.Qty).toHaveValue(2)
    })
    it.skip('Cek Minus Quantity Product', async function(){ //6
        // await detailProductPage.openPage2()
        await detailProductPage.clickminQty()
        expect(detailProductPage.Qty).toHaveValue(2)
    })
    it('Cek Add Favorit sebelum Login', async function(){ //7 PASSED
        await detailProductPage.openPage2()
        await detailProductPage.clickaddWhishlist()
        expect(browser).toHaveUrl('https://executive.co.id/account/login') //memastikan URL ke login page
    })
    it('Cek Ubah Size Ke M', async function(){ //8 //PASSED
        await detailProductPage.openPage2() //buka halaman web
        await detailProductPage.clicksizeM() // click button size M
        expect(browser).toHaveUrl('https://executive.co.id/collections/men-shirts/products/printed-short-sleeve-shirt-24c425-lt-blue?variant=44599366582434') //memastikan URL sudah ke size M
    })
    it('Cek Tambah Item Ke Keranjang', async function(){ //9 PASSED
        // await detailProductPage.openPage2()
        await detailProductPage.clickchartButton()
        expect(browser).toHaveElementClass(detailProductPage.cbPopup) //test apakah browser memunculkan class ini (pop-up keranjang)
        const prodName = await detailProductPage.getProdNameInPopup() //ambil judul dari pop up yang muncul, memastikan judul produk sesuai
        expect (prodName).toHaveText('Printed Short Sleeve Shirt') //memastikan judulnya sesuai
        await detailProductPage.clickchartButtonFinal() // klik button pada pop-up
        expect (browser).toHaveUrl('https://executive.co.id/cart') // memastikan masuk ke halaman keranjang
    })
})

//7 TEST CASES