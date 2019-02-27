var arr = [];


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(arr[0]);
    }, 2000);
  });
}

async function asyncCall() {
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
  db.collection('user').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {

      arr.push(doc.data());

    })
  });
  console.log(arr)

  var result = await resolveAfter2Seconds();


  var i = 0;
  var len = arr.length;
  var arr1 = [];
  var arr3 = [];
  for (; i < len; i++) {
    arr1.push(arr[i].region)
    arr3.push(arr[i].phcno)
  }
  arr1=arr1.filter( onlyUnique )
  arr3=arr3.filter(onlyUnique)
  console.log(arr1)
  console.log(arr3)
  result = await resolveAfter2Seconds();
  var arr2 = [];
  var x = 0;
  for (var j = 0; j < arr1.length; j++) {
    var k = 0;
    console.log(arr1[j])

    db.collection('user').where("region", "==", arr1[j]).get().then((snapshot) => {
      console.log(snapshot.docs.forEach(doc => {
        console.log(arr1[j] + "   heyy")
        k++

      }))
    });
    result = await resolveAfter2Seconds();
    arr2[j] = k;


  }
  console.log(arr2)
  result = await resolveAfter2Seconds();
  var arr4=[];
  for(var j=0;j<arr3.length;j++){
    var k=0;
    console.log(arr3[j]);
    db.collection('user').where("phcno", "==", arr3[j]).get().then((snapshot) => {
      console.log(snapshot.docs.forEach(doc => {
        console.log(arr3[j] + "   heyy")
        k++

      }))
    });
    result = await resolveAfter2Seconds();
    arr4[j] = k;

  }
console.log(arr4)
result = await resolveAfter2Seconds();
  new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: [arr1[0], arr1[1], arr1[2]],
      datasets: [
        {
          label: "No of pregnant women (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: [arr2[0], arr2[1], arr2[2]]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  });
  result = await resolveAfter2Seconds();
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: [arr3[0],arr3[1],arr3[0]],
      datasets: [{
        label: "PUBLIC HEALTH CENTER NO",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [arr4[0],arr4[1],arr4[2]]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'No of patients'
      }
    }
});


}

asyncCall();
console.log(arr)