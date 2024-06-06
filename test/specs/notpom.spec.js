import {expect,browser} from '@wdio/globals'

describe('Test not POM', function(){
    it('Menampilkan ID produk', async function () {
        await browser.url('https://www.uniqlo.com/id/id/products/E468879-000?colorCode=COL57&sizeCode=SMA003')
    
        const productID = await $ ('.title.fr-no-uppercase')
        const productIDText = await productID.getText()
    
        console.log('<||> ini text nya <||>', productID)
        expect(productIDText).toBe('T-Shirt Oversize Garis Kerah Bulat | Lengan 1/2')
    })
})
