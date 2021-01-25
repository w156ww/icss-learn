const fs = require('fs')
const path = require('path')
const folderRead = path.join(__dirname, 'src')

function folderEachCont() {
    const fileList = fs.readdirSync(folderRead);
    const sectionTitle = readFile(fileList)
    writeFile(fileList, sectionTitle)
}

function readFile(fileList) {
    const sectionTitle = {}
    if (fileList?.length) {
        fileList.forEach(name => {
            sectionTitle[name] = fs.readFileSync(path.join(__dirname, `src/${name}/note.md`), 'utf8').match(/(?<=##\s)(.)+(?=\s)/)[0]
        })
    }
    console.log('sectionTitle', sectionTitle.section1)
    return sectionTitle
}

function writeFile(fileList, sectionTitle) {
    let content = ''
    if (fileList?.length) {
        fileList.forEach(name => {
            content += `
### ${name}
${sectionTitle[name]} [地址](./${name}/index.html)
            `
        })
    }
    fs.writeFile(path.join(__dirname, 'catalogue.md'), content, {flag: 'w'}, err => {
        if (err) return console.error(err)
        console.log('success')
    })

}


folderEachCont()



