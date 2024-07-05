const app = Vue.createApp({
  data() {
    return {
      nombreColores: null,
      found:[],
      searchQuery:'',
      btn:false,
      obj:null,
      mensaje:'',
      objetos:[ {
        nombre:'maquina1', 
        model: 10,
        bodyStyle: -1,
        color: -1,
        panel: 4,
        specificGrid: false,
        grid: false,
        shift: 3,
        timePeriod: ["2021-07-01 13:56:35.378", "2024-08-08 13:56:35.378"],
        defectSize: [
          1.5,
          50,
        ],
        defectType: -1,
        customFilter: 0,
        wSVSDefects: true,
        defectStatus: -1,
      },
      {
        nombre:'maquina2', 
        model: 10,
        bodyStyle: -1,
        color: 35,
        panel: 4,
        specificGrid: false,
        grid: false,
        shift: 3,
        timePeriod: ["2021-07-01 13:56:35.378", "2024-08-08 13:56:35.378"],
        defectSize: [
          1.5,
          50,
        ],
        defectType: -1,
        customFilter: 0,
        wSVSDefects: true,
        defectStatus: -1,
      },

    
    
    ],
      datos:
        {
          modelOptions: [
            {
              modelId: -1,

              modelName: "All",
            },

            {
              modelId: 10,

              modelName: "CAMRY",
            },

            {
              modelId: 11,

              modelName: "RAV4",
            },
          ],

          bodyStyleOptions: [],

          colorOptions: [
            {
              colorId: -1,

              colorName: "All",
            },

            {
              colorId: 34,

              colorName: "UNDEFINED",
            },

            {
              colorId: 35,

              colorName: "WHITE",
            },

            {
              colorId: "36",

              colorName: "BLACK",
            },

            {
              colorId: "38",

              colorName: "COLOR_10",
            },

            {
              colorId: "39",

              colorName: "COLOR_20",
            },

            {
              colorId: "40",

              colorName: "COLOR_30",
            },

            {
              colorId: "41",

              colorName: "COLOR_40",
            },

            {
              colorId: "42",

              colorName: "COLOR_50",
            },

            {
              colorId: "43",

              colorName: "COLOR_60",
            },

            {
              colorId: "44",

              colorName: "COLOR_70",
            },

            {
              colorId: "45",

              colorName: "COLOR_80",
            },

            {
              colorId: "46",

              colorName: "COLOR_90",
            },

            {
              colorId: "47",

              colorName: "COLOR_100",
            },

            {
              colorId: "48",

              colorName: "COLOR_65",
            },

            {
              colorId: "49",

              colorName: "COLOR_75",
            },

            {
              colorId: "50",

              colorName: "SILVER",
            },

            {
              colorId: "54",

              colorName: "COLOR_45",
            },

            {
              colorId: "55",

              colorName: "DARK BLUE",
            },

            {
              colorId: "56",

              colorName: "DARK GRAY",
            },

            {
              colorId: "57",

              colorName: "LIGHT GRAY",
            },

            {
              colorId: "58",

              colorName: "RED",
            },

            {
              colorId: "59",

              colorName: "BROWN",
            },

            {
              colorId: "60",

              colorName: "WHITE PLATINUM",
            },

            {
              colorId: "61",

              colorName: "REF_BLACK",
            },

            {
              colorId: "62",

              colorName: "REF_WHITE",
            },

            {
              colorId: "63",

              colorName: "DEFAULT",
            },

            {
              colorId: "64",

              colorName: "LIGHT BLUE MICA",
            },

            {
              colorId: "65",

              colorName: "GREY STRAIGHT",
            },

            {
              colorId: "66",

              colorName: "UNKNOWN",
            },

            {
              colorId: "67",

              colorName: "WHITE PEARL",
            },

            {
              colorId: "68",

              colorName: "SILVER METALLIC",
            },

            {
              colorId: "69",

              colorName: "DARK GRAY MICA",
            },

            {
              colorId: "70",

              colorName: "DARK METALLIC BLUE",
            },

            {
              colorId: "71",

              colorName: "COLOR_TT_2QY",
            },

            {
              colorId: "72",

              colorName: "COLOR_TT_2RA",
            },

            {
              colorId: "73",

              colorName: "COLOR_TT_2QZ",
            },

            {
              colorId: "74",

              colorName: "COLOR_TT_2QJ",
            },

            {
              colorId: "75",

              colorName: "CALVARY BLUE",
            },

            {
              colorId: "76",

              colorName: "COLOR_TT_2VV",
            },

            {
              colorId: "77",

              colorName: "COLOR_TT_2PS",
            },
          ],

          panelOptions: [
            {
              areaId: 1,

              modelId: 10,

              pieceIds: "-1",

              locationId: 1,

              areaName: "CAMRY - Left Side",

              surface: 2475892.15,
            },

            {
              areaId: 2,

              modelId: 10,

              pieceIds: "-1",

              locationId: 2,

              areaName: "CAMRY - Right Side",

              surface: 2519749.86,
            },

            {
              areaId: 3,

              modelId: 10,

              pieceIds: "-1",

              locationId: 3,

              areaName: "CAMRY - Hood & Roof",

              surface: 3282560.66,
            },

            {
              areaId: 4,

              modelId: 10,

              pieceIds: "-1",

              locationId: 5,

              areaName: "CAMRY - Full",

              surface: 8906516.9,
            },

            {
              areaId: 5,

              modelId: 10,

              pieceIds: "1",

              locationId: -1,

              areaName: "RH Front Fender Up",

              surface: 158701.49,
            },

            {
              areaId: 6,

              modelId: 10,

              pieceIds: "2",

              locationId: -1,

              areaName: "RH Front Fender Down",

              surface: 127206.71,
            },

            {
              areaId: 7,

              modelId: 10,

              pieceIds: "3",

              locationId: -1,

              areaName: "LH Front Fender Up",

              surface: 158817.15,
            },

            {
              areaId: 8,

              modelId: 10,
              pieceIds: "4",

              locationId: -1,

              areaName: "LH Front Fender Down",

              surface: 127089.4,
            },

            {
              areaId: 9,

              modelId: 10,

              pieceIds: "5",

              locationId: -1,

              areaName: "RH Hood",

              surface: 828576.43,
            },

            {
              areaId: 10,

              modelId: 10,

              pieceIds: "6",

              locationId: -1,

              areaName: "LH Hood",

              surface: 828595.24,
            },

            {
              areaId: 11,

              modelId: 10,

              pieceIds: "7",

              locationId: -1,

              areaName: "RH Front Door Up",

              surface: 159666.76,
            },

            {
              areaId: 12,

              modelId: 10,

              pieceIds: "8",

              locationId: -1,

              areaName: "RH Front Door Down",

              surface: 672189.74,
            },

            {
              areaId: 13,

              modelId: 10,

              pieceIds: "9",

              locationId: -1,

              areaName: "LH Front Door Up",

              surface: 159800.4,
            },

            {
              areaId: 14,

              modelId: 10,

              pieceIds: "10",

              locationId: -1,

              areaName: "LH Front Door Down",

              surface: 672055.8,
            },

            {
              areaId: 15,

              modelId: 10,

              pieceIds: "11",

              locationId: -1,

              areaName: "RH Rear Door Up",

              surface: 140565.13,
            },

            {
              areaId: 16,

              modelId: 10,

              pieceIds: "12",

              locationId: -1,

              areaName: "RH Rear Door Down",

              surface: 506936.24,
            },

            {
              areaId: 17,

              modelId: 10,

              pieceIds: "13",

              locationId: -1,

              areaName: "LH Rear Door Up",

              surface: 140682.3,
            },

            {
              areaId: 18,

              modelId: 10,

              pieceIds: "14",

              locationId: -1,

              areaName: "LH Rear Door Down",

              surface: 506820.62,
            },

            {
              areaId: 19,

              modelId: 10,

              pieceIds: "15",

              locationId: -1,

              areaName: "RH Ditch",

              surface: 342903.74,
            },

            {
              areaId: 20,

              modelId: 10,

              pieceIds: "16",

              locationId: -1,

              areaName: "LH Ditch",

              surface: 340373.46,
            },

            {
              areaId: 21,

              modelId: 10,

              pieceIds: "17",

              locationId: -1,

              areaName: "RH Rear Fender Up",

              surface: 154505.97,
            },

            {
              areaId: 22,

              modelId: 10,

              pieceIds: "18",

              locationId: -1,

              areaName: "RH Rear Fender Down",

              surface: 257074.08,
            },

            {
              areaId: 23,

              modelId: 10,

              pieceIds: "19",

              locationId: -1,

              areaName: "LH Rear Fender Up",

              surface: 126495.3,
            },

            {
              areaId: 24,

              modelId: 10,

              pieceIds: "20",

              locationId: -1,

              areaName: "LH Rear Fender Down",

              surface: 243757.72,
            },

            {
              areaId: 25,

              modelId: 10,

              pieceIds: "21",

              locationId: -1,

              areaName: "RH Roof",

              surface: 884296.95,
            },

            {
              areaId: 26,

              modelId: 10,

              pieceIds: "22",

              locationId: -1,

              areaName: "LH Roof",

              surface: 884236.12,
            },

            {
              areaId: 27,

              modelId: 10,

              pieceIds: "23",

              locationId: -1,

              areaName: "RH Tailgate Up",

              surface: 332167.33,
            },

            {
              areaId: 28,

              modelId: 10,

              pieceIds: "24",

              locationId: -1,

              areaName: "LH Tailgate Up",

              surface: 332172.43,
            },

            {
              areaId: 29,

              modelId: 10,

              pieceIds: "25",

              locationId: -1,

              areaName: "RH Tailgate Down",

              surface: 118072.64,
            },

            {
              areaId: 30,

              modelId: 10,

              pieceIds: "26",

              locationId: -1,

              areaName: "LH Tailgate Down",

              surface: 118072.75,
            },

            {
              areaId: 31,

              modelId: 10,

              pieceIds: "1,2",

              locationId: -1,

              areaName: "RH Front Fender",

              surface: 1,
            },

            {
              areaId: 32,

              modelId: 10,

              pieceIds: "-1",

              locationId: 6,

              areaName: "CAMRY - Interior",

              surface: 1,
            },

            {
              areaId: 38,

              modelId: 11,

              pieceIds: "-1",

              locationId: 5,

              areaName: "Full",

              surface: 8436803.3,
            },
          ],

          lineOptions: [],

          ovenOptions: [],

          boothOptions: [],

          shiftOptions: [
            {
              shiftId: 0,

              shiftName: "Custom",

              initTime: "00:00:00",

              endTime: "00:00:00",
            },

            {
              shiftId: 1,

              shiftName: "1st Shift",

              initTime: "07:30:00",

              endTime: "19:30:00",
            },

            {
              shiftId: 2,

              shiftName: "2nd Shift",

              initTime: "19:30:00",

              endTime: "07:30:00",
            },

            {
              shiftId: 3,

              shiftName: "All",

              initTime: "07:30:00",

              endTime: "07:29:59",
            },
          ],

          defectSizeOptions: [],

          defectTypeOptions: [
            {
              id: -1,

              name: "All",
            },

            {
              id: 15,

              name: "Orange Peel",
            },

            {
              id: 4,

              name: "Lint",
            },

            {
              id: 3,

              name: "Crater",
            },

            {
              id: 2,

              name: "Seed",
            },

            {
              id: 1,

              name: "Unclassified",
            },
          ],

          defectStatusOptions: [
            {
              id: -1,

              name: "All",
            },
          ],
        },
    };
  },
  methods: {
    // ponerDatos(){
    //     for(modelo in modelOptions){
    //       if(modelo.modelId==this.object.model){
    //         this.model=this.modelo.modelId;
    //       }else{
    //         console.error("No encontrado")
    //       }
    //     }

    //     for(color in colorOptions){
    //       if(color.id==this.object.color){
    //         this.object.color=color.colorName
    //       }else{
    //         console.error("No encontrado")
    //       }
    //     }

    //     for(color in colorOptions){
    //       if(color.id==this.object.color){
    //         this.object.color=color.colorName
    //         console.log(this.object.color)
    //       }else{
    //         console.error("No encontrado")
    //       }
    //     }
    // },
    // buscar() {
    //   this.cambiarPropiedades(this.objetos)
    // },
    cambiarPropiedades() {
      this.obj.color = this.datos.colorOptions.find((colorOption) => colorOption.colorId === this.obj.color).colorName || this.obj.color;
      console.log(this.objetos);

      this.obj.model = this.datos.modelOptions.find((modelOption) => modelOption.modelId === this.obj.model).modelName || this.obj.model;
      console.log(this.objetos);

      this.obj.panel = this.datos.panelOptions.find((panelOpt) => panelOpt.areaId === this.obj.panel).areaName || this.obj.panel;
      console.log(this.objetos);
    },
    buscar(nom) {
      this.found = this.objetos.filter(obj => obj.nombre.includes(nom));
      this.obj = this.objetos.find(obj => obj.nombre === nom);
      if(this.obj){
        this.btn=true
      }else{
        this.btn=false
      }
      console.log(this.found);
    },
    cambiartodos(){
      for(let i=0;this.objetos.length>i;i++){
        let obj=this.objetos[i]
      obj.color = this.datos.colorOptions.find((colorOption) => colorOption.colorId === obj.color).colorName || obj.color;
      console.log(this.objetos);

      obj.model = this.datos.modelOptions.find((modelOption) => modelOption.modelId === obj.model).modelName || obj.model ;
      console.log(this.objetos);

      obj.panel = this.datos.panelOptions.find((panelOpt) => panelOpt.areaId === obj.panel).areaName || obj.panel;
      console.log(this.objetos);
      }
    },
  },
  watch:{
    searchQuery(encontrar) {
      this.buscar(encontrar);
    }
  }
});
app.mount("#app");
