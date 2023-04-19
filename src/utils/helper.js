export const getActiveRouter = (currentRouter, listOfTabs) => {
   if(currentRouter === '/' || currentRouter === 'special')
   {
    listOfTabs = listOfTabs.map((item) => item.id === 1 ? {...item, active: true} : {...item, active: false})
   }else{
    listOfTabs = listOfTabs.map((item) => item.route.includes(currentRouter) ? {...item, active: true} : {...item, active: false});
   }

   return listOfTabs;
}