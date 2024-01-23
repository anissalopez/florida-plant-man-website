export const categories = [{
    name: "Alocasia", 
    pronunciation: "alo-ca-si-a",
    definition: `a genus of rhizomatous or tuberous, broad-leaved, perennial, flowering plants from the family Araceae. There are about 90 accepted species native 
    to tropical and subtropical Asia and eastern Australia.` }, 
    {name:"Anthurium",
    pronunciation: 'an-thoor-ee-uhm',
    definition:`any of a genus (Anthurium) of tropical American plants of the arum family with large often brightly colored leaves, 
    a cylindrical spadix, and a colored spathe.`}, {
        name:"Monstera",
        pronunciation:"mon·​stera",
        definition: `Any of a genus (Monstera) of tropical American climbing plants of the arum family that have deeply incised or perforated leaves and an erect floral spadix enclosed in a white to yellow concave bract and 
        that include some grown for their large ornamental leaves.`},
        {name:"Philodendron",
        pronunciation: "phil·​o·​den·​dron",
        definition: `any of various aroid plants (as of the genus Philodendron)
         that are cultivated for their showy foliage.` },
        {name:"Syngonium",
        pronunciation: "Syn·​go·​ni·​um",
        definition: `a genus of climbing shrubs (family Araceae) native to Central and South America and used as ornamental 
        house plants especially for their velvety foliage.`
         } ]

export const handleClick = (e, open, setOpen, navigate) =>{
            if (e.target.textContent === 'Plants'){
   
              setOpen({...open, plants:!(open.plants)})
            }
            if (e.target.textContent === 'Customers'){
              setOpen({...open, customers:!(open.customers)})
            }
            if (e.target.textContent === "Add Plants"){
              navigate("/admin/plantform")
            }
            if (e.target.textContent === 'View Plants') {
              navigate("/admin/planttable");
            }
            if (e.target.textContent === 'View Customers') {
              navigate("/admin/customertable");
            }
            if (e.target.textContent === 'Add Customers') {
              navigate("/admin/customerform");
            }
          }



