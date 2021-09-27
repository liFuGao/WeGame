import Clipboard from 'clipboard'
export function copyName(buttonClass) {
    let clipboard = new Clipboard(buttonClass)
    clipboard.on('success', e => {
        this.$message.success("复制成功");//这里你如果引入了elementui的提示就可以用，没有就注释即可
        // 释放内存
        clipboard.destroy()
    })
    clipboard.on('error', e => {
        // 不支持复制
        this.$message.error('该浏览器不支持自动复制')
            // 释放内存
        clipboard.destroy()
    })
}
