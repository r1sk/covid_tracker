
function fetch_data(){
    fetch('https://api.rootnet.in/covid19-in/stats/latest')
    .then(res=>{
        return (res.json());
    })
    .then(data=>{
        //const state_cnt =  res.statewise.length;
        const myData = Object.values(data.data.summary);
        const refreshed = data.lastOriginUpdate;
        const refreshed_date = new Date(refreshed);
        document.querySelector('#date').textContent = refreshed_date;
        console.log(myData);
        //console.log(document.querySelector('.wrapper .act_num').textContent  );

       
        document.querySelector('.wrapper_stats .confirm_num').textContent = myData[0];
         document.querySelector('.wrapper_stats .act_num').textContent =   myData[0] - myData[3];
       document.querySelector('.wrapper_stats .recov_num').textContent = myData[3];
        document.querySelector('.wrapper_stats .death_num').textContent = myData[4]; 
         
    });
}
    fetch_data();