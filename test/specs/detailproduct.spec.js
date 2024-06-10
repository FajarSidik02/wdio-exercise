import {expect,browser} from '@wdio/globals'
import detailProductPage from '../pageobjects/detailProductObj.js'
import cartObj from '../pageobjects/cartObj.js'

describe('Fitur Detail Produk', function (){
    let link1
    let link3

    before('User harus berada pada halaman beranda', async function(){
        await detailProductPage.openPage1()
        link1 = await detailProductPage.productbefore.getAttribute('href')
        link3 = await detailProductPage.productafter.getAttribute('href')

        await detailProductPage.clickProduct()
        await expect(browser).toHaveUrl('https://executive.co.id/collections/men-shirts/products/printed-short-sleeve-shirt-24c425-lt-blue')
    })
    it('Cek Nama Produk', async function(){ //1 PASSED
        await detailProductPage.openPage2()
        const namaProd = await detailProductPage.getProdName()
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',namaProd)
        expect(namaProd).toBe('Printed Short Sleeve Shirt')
    })
    it('Cek Panduan Ukuran', async function(){ //2 MASIH NYARI
        await detailProductPage.openPage2()
        await detailProductPage.clickSizeChart()//harus dijalanin biar ke-detect
        await browser.pause(3000)
        const testing = await detailProductPage.ukuranTubuh.isDisplayedInViewport()
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',testing)
        expect (testing).toBe(true)
    })
    it('Cek Halaman Sebelum', async function(){ //3 PASSED
        await detailProductPage.openPage2()
        await detailProductPage.clickPageBefore()
        expect(browser).toHaveUrl(link1)
    })
    it('Cek Halaman Setelah', async function(){ //4 PASSED
        await detailProductPage.openPage2()
        await detailProductPage.clickPageBefore()
        expect(browser).toHaveUrl(link3)
    })
    it('Cek Add Quantity Product', async function(){ //5 SOLVED BROO GG
        await detailProductPage.openPage2() // buka halaman
        let jmlawal = await detailProductPage.getQtyValue()
        await detailProductPage.clickaddQty() // click button
        let jml = await detailProductPage.getQtyValue() //getvalue, simpan
        expect(jml).toEqual(jmlawal+1)
    })
    it('Cek Minus Quantity Product', async function(){ //6 SOLVED GG
        // await detailProductPage.openPage2()
        let jmlawal2 = await detailProductPage.getQtyValue()
        await detailProductPage.clickminQty()
        let jml2 = await detailProductPage.getQtyValue()
        expect(jml2).toEqual(jmlawal2 - 1)
    })
    it('Cek Add Favorit sebelum Login', async function(){ //7 PASSED
        await browser.setWindowSize(1366, 768)
        await detailProductPage.openPage2()
        await detailProductPage.clickaddWhishlist()
        expect(browser).toHaveUrl('https://executive.co.id/account/login') //memastikan URL ke login page
    })
    it('Cek Ubah Size Ke M', async function(){ //8 PASSED
        await detailProductPage.openPage2() //buka halaman web
        await detailProductPage.clicksizeM() // click button size M
        expect(browser).toHaveUrl('https://executive.co.id/collections/men-shirts/products/printed-short-sleeve-shirt-24c425-lt-blue?variant=44599366582434') //memastikan URL sudah ke size M
    })
    it('Cek Tambah Item Ke Keranjang', async function(){ //9 PASSED
        await browser.setWindowSize(1366, 768)
        await detailProductPage.openPage2()
        await detailProductPage.clickchartButton()
        expect(browser).toHaveElementClass(detailProductPage.cbPopup) //test apakah browser memunculkan class ini (pop-up keranjang)
        const prodName = await detailProductPage.getProdNameInPopup() //ambil judul dari pop up yang muncul, memastikan judul produk sesuai
        expect (prodName).toBe('Printed Short Sleeve Shirt') //memastikan judulnya sesuai
        await detailProductPage.clickchartButtonFinal() // klik button pada pop-up
        const prodNameCart = await cartObj.getProdNameCart()
        expect (prodNameCart).toBe('Printed Short Sleeve Shirt') // tidak bisa pakai tohavetext, kalo textnya beda, tetap jalan
        expect (browser).toHaveUrl('https://executive.co.id/cart') // memastikan masuk ke halaman keranjang
    })
})

//9 TEST CASES