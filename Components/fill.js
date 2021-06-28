Vue.component('fill', {
    template: //html
    `
    <div class="p-3 mt-3" style="border: 3px solid #42B983; background: white; display: flex; align-items: center; justify-content: space-between">
        <div style="display: flex">
            <span class="text-primary mr-3"><b>[Item {{index+1}}]</b></span>
            <span>Em dic {{nom[index]}} i el meu pare es diu {{nomPare}}</span>
        </div>
        <button class="btn btn-warning"  @click="sumaUn()">{{num}}</button>
    </div>
    `,
    props:['nomPare', 'index'],
    data() {
        return {
            nom: ['Marc', 'Anna', 'Ferran', 'Paula', 'Carolina', 'Pep'],
            num: 0
        };
    },
    updated(){
        this.$emit('num', this.num);
    },
    methods:{
        sumaUn(){
            this.num++;
        },
    }
});