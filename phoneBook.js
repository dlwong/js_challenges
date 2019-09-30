function phoneBook(book, name) {
  for (let i = 0; i < book.length; i++){
    if (book[i].name === name) {
      return book[i].phone;
    }
  }




}


const book = [
  {name: 'alice', phone: '650-340-3403'},
  {name: 'kane', phone: '650-230-2342'},
  {name: 'adam', phone: '650-310-3256'},
  {name: 'edith', phone: '650-342-3404'}
]

console.log(phoneBook(book,'kane'));