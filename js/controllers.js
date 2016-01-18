app.controller('detalleEntrenamientoCtrl', [function () {
    var vm = this;
    vm.competencias_preguntas = [];
    vm.num_preguntas = 20;
    vm.tiempoPregunta = 45;
    vm.competencias = [
        {
            'id' : 1,
            'nombre_competencia' : 'Competencias Ciudadanas',
            'icon': 'assignment'
        },
        {
            'id' : 2,
            'nombre_competencia' : 'Lectura Critica',
            'icon': 'assignment'
        },
        {
            'id' : 3,
            'nombre_competencia' : 'Razonamiento Cuantitativo',
            'icon': 'assignment'
        },
        {
            'id' : 4,
            'nombre_competencia' : 'Ingles',
            'icon': 'assignment'
        }
    ];

    vm.change = function(value, object, index) {
        //alert(value+" "+index);
        if(value == true) {
            vm.competencias_preguntas.push(vm.competencias[index]);
        }
        if(value == false){
            if(vm.competencias_preguntas.length == 1)
            {
                vm.competencias_preguntas = [];
            }
            if(vm.competencias_preguntas.length > 1){
                vm.competencias_preguntas.splice(vm.competencias_preguntas.indexOf(object), 1);
                //alert("entro");
            }
        }
        vm.calcularTiempo();
        //console.log(vm.competencias_preguntas);
    };

    vm.calcularTiempo = function() {
        _calcularTiempo();
    };

    _init();

    function _init() {
    };

    function _calcularTiempo() {
        var segundos_total = vm.num_preguntas * vm.competencias_preguntas.length * vm.tiempoPregunta;
        var residuo = segundos_total%60;
        vm.minutos = (segundos_total - residuo)/60;
        if(residuo < 10)
        {
            vm.segundos = "0"+residuo;
        }
        else{
            vm.segundos = residuo;
        }
    };
}]);