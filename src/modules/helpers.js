const setDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yyyy = today.getFullYear();
  if(dd<10) {
    dd='0'+ dd;
    }
    if (mm<10){
      mm='0'+ mm
    }
  today = yyyy + '-' + mm + '-' + dd;
  return today;
};


const Flag = (priority) => {
  if (priority == 1)
  return '<i class="fas fa-flag text-success"></i>'
  else
  if (priority == 2)
  return '<i class="fas fa-flag text-info"></i>';
  else
  if (priority == 3)
  return '<i class="fas fa-flag text-warning"></i>'
  else
  return '<i class="fas fa-flag text-danger"></i>'
}

const Status = (value) => {
  return value ? '<i class="fas fa-check  text-dark statusBTN"></i>' : '<i class="fas fa-spinner text-dark statusBTN"></i>';
}
export { setDate, Flag, Status };