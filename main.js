$(document).ready(function () {

  var infoArray = [];
  retrieveData();
  linkData();
  refreshInfoTable();
  //outputArray();// just shows infoArray content inside in console
  /*
  test_func();

  function test_func() {
    // let myStorage = window.localStorage;
     //myStorage.setItem('myKey', ['car', 'cat', 'abc-de,fg,rt-','dog', 15]);
     window.localStorage.setItem('myKey', [{
      "id": 28,
      "Title": "Sweden"
    }, {
      "id": 56,
      "Title": "USA"
    }, {
      "id": 89,
      "Title": "England"
    }]);
     console.log(window.localStorage);
     
  }
  */


  window.onbeforeunload = function () {
    window.localStorage.setItem('myData', JSON.stringify(infoArray));
  }

  function linkData() {
    //console.log(window.localStorage.getItem('myData'));
    infoArray = JSON.parse(window.localStorage.getItem('myData'));
    //console.log(infoArray);
  }

  $("#infoTbl tbody tr").on('click', '#del', function (e) {
    e.preventDefault();
    //
    //alert('just fine');
    //let elem = $(this).parent().parent().html();
    //console.log(`elem = ${elem}`);
    let elem = $(this).parent().parent();
    let id = $(elem).find("td:first").text();



    //outputArray();
    //let ind = findIndexByID(id);
    let ind = infoArray.findIndex((item) => JSON.parse(item).id == id);
    console.log(`id = ${id}   ind = ${ind}`);
    infoArray.splice(ind, 1);
    
    refreshInfoTable();
    
    /*const myPromise = new Promise((resolve, reject) => {
      infoArray.splice(ind, 1);
    });
    myPromise.then(refreshInfoTable());*/

  });

  /*async*/
  /*function findIndexByID(id) {
    for (let i = 0; i < infoArray.length; i++) {
      if (JSON.parse(infoArray[i]).id == id)
        return i;
    }
    return -1;
  }
  */

  function outputArray() {
    console.log(`infoArray content is: `);
    for (let i = 0; i < infoArray.length; i++) {
      console.log(`arr[${i}] = ${infoArray[i]}`);
    }
  }

  function refreshInfoTable() {
    let template = ``;
    infoArray.forEach((data) => {
      let elem = JSON.parse(data);

      template += `<tr>`;
      template += `<td> ${elem.id} </td>`;
      template += `<td> ${elem.name} </td>`;
      template += `<td> ${elem.symbol} </td>`;
      template += `<td> ${elem.slug} </td>`;
      template += `<td> ${elem.rank} </td>`;
      template += `<td id="del"> <i class="fas fa-trash-alt"></i> </td>`;
      template += `</tr>`;
    });

    $('#infoTbl tbody').html(template);
  }

  $("#tbl tbody").on('click', 'tr', function () {
    //let item = $(this).html();
    //console.log(`item = ${item}`);
    let elem = $(this).find("td:first").text();
    //console.log(elem);
    infoArray.push(elem);
    refreshInfoTable();
  });


  function retrieveData() {
    $.getJSON('https://powerful-atoll-78162.herokuapp.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=5b4b2129-b2af-4ab5-8ffd-071cf4cb0da9', function (data) {
      //console.log(data);
      let template = ``;
      Object.values(data)[1].forEach(element => {
        //console.log(element);
        //console.log(`id = ${element.id}   name = ${element.name}`);
        template += `<tr>`;
        template += `<td hidden> ${JSON.stringify(element)} </td>`;
        template += `<td> ${element.id} </td>`;
        template += `<td> ${element.name} </td>`;
        template += `</tr>`;
      });
      $('#tbl tbody').html(template);
    });
  }

});