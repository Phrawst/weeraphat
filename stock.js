 const db=firebase.firestore();
 const table = document.querySelector('#tbresult');
 const form = document.querySelector('#addForm');
 db.collection('Stock').get().then((snapshot)=>{
	//console.log(snapshot.docs);
	snapshot.forEach(doc=>{
		console.log(doc.data());
		dispData(doc);
	});
});
form.addEventListener('submit', (e)=>{
	e.preventDefault();
console.log(form.name.value);
db.collection('Stock').add({
	InStock:form.InStock.value,
	Name:form.name.value,
	ProdId:form.ProdId.value,

});

});
function dispData(doc){
   var row = table.insertRow(-1);
   var cell0 = row.insertCell(0);
   var cell1 = row.insertCell(1);
   var cell2 = row.insertCell(2);
  cell0.innerHTML = doc.data().InStock;
  cell1.innerHTML = doc.data().Name;
  cell2.innerHTML = doc.data().ProdID;

}