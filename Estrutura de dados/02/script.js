const patients = [
  {
    name:"Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name:"Alexandra",
    age: 27,
    weight: 70,
    height: 165,
  },
  {
    name:"Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
] 

const printPatientIMC = (patient) => {
  return `Paciente ${patient.name} possui o IMC de:
  ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}`
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}
