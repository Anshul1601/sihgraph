var arr=[];


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(arr[0]);
      }, 1000);
    });
  }
  
  async function asyncCall() {
   
   db.collection('user').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        
        arr.push(doc.data());
        
    })
});
    console.log(arr)

    var result = await resolveAfter2Seconds();
    
   
    var i = 0;
    var len = arr.length;
    var arr1=[];
    var arr3=[];
    for (; i < len; i++) { 
        arr1.push(arr[i].region)
        arr3.push(arr[i].phcno)
    }
    console.log(arr1)
    result = await resolveAfter2Seconds();
    var arr2=[];
    var x=0;
    for(var j=0;j<arr1.length;j++){
        var k=0;
        console.log(arr1[j])
        
    db.collection('user').where("region","==",arr1[j]).get().then((snapshot) => {
       console.log(snapshot.docs.forEach(doc => {
            console.log(arr1[j]+"   heyy")
            k++
          
        }))
    });
    result=await resolveAfter2Seconds();
     arr2[j]=k;
    }


    var result = await resolveAfter2Seconds();
     console.log(arr2)
    //  new Chart(document.getElementById("bar-chart"), {
    //     type: 'bar',
    //     data: {
    //       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    //       datasets: [
    //         {
    //           label: "Population (millions)",
    //           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    //           data: [2478,5267,734,784,433]
    //         }
    //       ]
    //     },
    //     options: {
    //       legend: { display: false },
    //       title: {
    //         display: true,
    //         text: 'Predicted world population (millions) in 2050'
    //       }
    //     }
    // });

     new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: [arr1[0],arr1[1],arr1[2]],
          datasets: [
            {
              label: "No of pregnant women (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [arr2[0],arr2[1],arr2[2]]
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
    

    
  }
  
  asyncCall();
  console.log(arr)