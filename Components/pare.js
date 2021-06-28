Vue.component('pare', {
    template: //html
    `
    <div class="p-3 mt-5" style="border: 5px solid #42B983; background: lightgray">
        <h4>{{missatge}}, em dic {{nom}} i tinc {{this.fills.length}} fills</h4>
        <div v-for="(fill, index) in fills">
            <fill :nomPare="nom" :index="index" @num="num[index] = $event"></fill>
        </div>
        <div class="mt-3" style="display: flex; align-items: center; justify-content: space-between">
            <button @click="afegirFill" class="btn btn-success">Afegir item</button>
            <span id="total">Total: </span>
            <button @click="calculaTotal" class="btn btn-danger">Calcula total</button>
        </div>
    </div>
    `,
    data() {
        return {
            missatge: 'Sóc el pare',
            nom: 'Joan',
            num: [0,0,0], 
            fills: ['', '', '']
        };
    }, methods:{
        afegirFill(){
            this.fills.push('');
            this.num.push(0);
        },
        calculaTotal(){
            let suma = 0;
            this.num.forEach(element => {console.log(element); suma+=element;});
            document.getElementById("total").innerHTML = `Total: ${suma}`;
        }
    }
});