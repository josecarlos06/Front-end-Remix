export const formatDate = date => {
   const dateNew = new Date(date);
   const option = {
      year :'numeric',
      month : 'long',
      day : '2-digit'
   }
   return dateNew.toLocaleDateString('es-ES', option)
}