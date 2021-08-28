// array object
const students = {
  id: 1,
  name: 'Joe Doe',
  address: '1219 / 2 USA'
}

const student1 = students.name
const student2 = students['name']
const student3 = (students.fatherName = 'Kabir')
const studetn4 = (students['motherName'] = 'Sakira')
const student5 = (students['phone'] = 012245547)
console.log(students)
