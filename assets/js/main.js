const app = new Vue({
	el: "#app",
	data: {
		isAppActive: false,
		projects: [],
		yearly: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
		selection: {
			droneType: {
				id: 1,
				key: "All Drones",
				info: "",
				class: "allBtn",
                target:'',
			},
			currentYear: {
				year: 2014,
				cases: 783,
				matric: 10000,
                type: [4,2,6]
			},
		},
		count: {
			cases: 1000,
			drones: 1000,
			date: new Date(),
		},
		yearMetric: [
			{
				year: 2014,
				cases: 783,
				matric: 10000,
                type: [4,2,6]
			},
			{
				year: 2015,
				cases: 781,
				matric: 10000,
                type: [20,13,17]
			},
			{
				year: 2016,
				cases: 1093,
				matric: 10000,
                type: [19,3,3]
			},
			{
				year: 2017,
				cases: 1778,
				matric: 100000000,
                type: [23,15,29]
			},
			{
				year: 2018,
				cases: 2463,
				matric: 100000000,
                type: [15,10,35]
			},
			{
				year: 2019,
				cases: 2463,
				matric: 100000000,
                type: [35,15,11]
			},
			{
				year: 2020,
				cases: 3148,
				matric: 100000000,
                type: [43,20,7]
			},
			{
				year: 2021,
				cases: 3833,
				matric: 1000000,
                type: [20,25,25]
			},
		],
		droneType: [
			{
				id: 1,
				key: "All Drones",
				info: "",
				class: "allBtn",
                target:'',
			},
			{
				id: 2,
				key: "Hobbyist Drones",
				info: "Hobbyist or Civilian Drones are UAVs used by amateurs for recreational purposes.",
				class: "hdBtn",
                target: "hd"
			},
			{
				id: 3,
				key: "Non Hobbyist Drones",
				info: "Non Hobbyist or Commercial drones are UAVs which are operated by professional pilots and brought into use for research, mass surveillance and money making purposes.",
				class: "nhdBtn",
                target: "nhd"
			},
			{
				id: 4,
				key: "Government",
				info: "Military or Government drones are UAVs which are used for government operations and are remotely piloted eliminating the need for a pilot to be on board during a given flight.",
				class: "govBtn",
                target: "gov"
			},
		]
	},
	created() {
		const self = this;
		if (localStorage.getItem("droned") === null) {
			localStorage.setItem("droned", JSON.stringify(this.count));
		}
		
        this.generateCircles();
	},
	computed: {
		filteredProjects: function () {
			const self = this;
			return self.projects;
		},
	},
	methods: {
        generateCircles(){
            const type = ['gov', 'nhd', 'hd'];
            const sum = (total, num) => total + num;
            let circleCount = this.selection.currentYear.type.reduce(sum);

            let target = this.selection.droneType.target;
            if(target != ''){
                if(target == 'gov'){
                    circleCount = this.selection.currentYear.type[0];
                }
                if(target == 'hd'){
                    circleCount = this.selection.currentYear.type[1];
                }
                if(target == 'nhd'){
                    circleCount = this.selection.currentYear.type[2];
                }
            }

            let content = "";
            for (let i = 0; i < circleCount; i++) {
                // console.log(data[i]['count']);
                let targetClass = '' 
                if(target === ''){
                    targetClass = type[Math.floor(Math.random() * type.length)];
                }else{
                    targetClass = target;
                }
                const num = Math.floor(Math.random() * 41) + 1;
                content += '<li class="filter-item ' + targetClass + '"><div><a class="popupOpen" data-popup="' + num + '.gif"><img src="gifs/low/' + num + '.gif"></a></div></li>';
            }
            document.getElementById("gifs").innerHTML = content;
        },
        setYear(year){
            this.selection.currentYear = year;
            this.generateCircles();
        },
        setType(type){
            this.selection.droneType = type;
            this.generateCircles();
        }
    },
});
