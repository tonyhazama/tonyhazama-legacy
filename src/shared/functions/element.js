export const getXPos = (id) => {
  var bodyRect = document.body.getBoundingClientRect(),
  elemRect = document.getElementById(id).getBoundingClientRect(),
  offset   = elemRect.top - bodyRect.top;
  return offset;
}

export const bodyXPos = () => {
  var bodyRect = document.body.getBoundingClientRect();
  return Math.abs(bodyRect.top);
}