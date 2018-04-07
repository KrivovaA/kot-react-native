const transportList = [
  {id:'1', Number: '1', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 55},
  {id:'2', Number: '1', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'3', Number: '1', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'4', Number: '1', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 60},
  {id:'5', Number: '1', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'6', Number: '1', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'7', Number: '1', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'8', Number: '2', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'9', Number: '2', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'10', Number: '2', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 60},
  {id:'11', Number: '2', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'12', Number: '3', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'13', Number: '3', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 70},
  {id:'14', Number: '3', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'15', Number: '3', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'16', Number: '5', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 60},
  {id:'17', Number: '5', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'18', Number: '5', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'19', Number: '5', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 70},
  {id:'20', Number: '5', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'21', Number: '7', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'22', Number: '7', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 60},
  {id:'23', Number: '8', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 70},
  {id:'24', Number: '8', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'25', Number: '8', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'26', Number: '12', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'27', Number: '12', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 60},
  {id:'28', Number: '12', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'29', Number: '19', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'30', Number: '19', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'31', Number: '19', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'32', Number: '19', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'34', Number: '23', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'33', Number: '23', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'35', Number: '31', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'36', Number: '31', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 60},
  {id:'37', Number: '31', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'38', Number: '31', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'39', Number: '32', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'40', Number: '35', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'41', Number: '35', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 60},
  {id:'42', Number: '35', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 70},
  {id:'43', Number: '35', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'44', Number: '38', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 60},
  {id:'45', Number: '38', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 60},
  {id:'46', Number: '43', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: false, Capacity: 100},
  {id:'47', Number: '43', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'48', Number: '43', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 70},
  {id:'49', Number: '43', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 100},
  {id:'50', Number: '43', InspectionDate: 'Fri Nov 11 2011 00:00:00', IsHaveWheelChair: true, Capacity: 60},
];

let transportCountList = [];
let obj = {
  count: 0,
  number: null
};

transportList.map((item) => {
  if (item.Number !== obj.number) {
    obj.number = item.Number;
    obj.count = obj.count + 1;
    transportCountList.push({
      number: obj.number,
      count: obj.count
    });
    obj.count = 0;
  }
  else {
    obj.count = obj.count + 1;
  }
});


export { transportCountList, transportList };