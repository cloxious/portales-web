import{j as e,L as r}from"./index-BUG8D37-.js";import{u as t}from"./usePageTitle-B8CZuRH0.js";function n(){t("Eventos");const s=[{id:1,title:"Jornada de Adopción",date:"15 de Julio, 2023",time:"10:00 AM - 4:00 PM",location:"Parque Central",description:"Ven y conoce a nuestros adorables perros y gatos en busca de un hogar permanente."},{id:2,title:"Taller de Cuidado de Mascotas",date:"22 de Julio, 2023",time:"2:00 PM - 5:00 PM",location:"Centro Comunitario",description:"Aprende sobre el cuidado básico de perros y gatos, incluyendo nutrición, higiene y primeros auxilios."},{id:3,title:"Carrera Benéfica 'Patas a Correr'",date:"5 de Agosto, 2023",time:"8:00 AM - 12:00 PM",location:"Pista de Atletismo Municipal",description:"Participa en nuestra carrera anual para recaudar fondos. ¡Trae a tu mascota!"}];return e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-primary-dark mb-6",children:"Próximos Eventos"}),e.jsx("p",{className:"text-text mb-8",children:"Únete a nosotros en nuestros eventos para apoyar a los animales necesitados y aprender más sobre el cuidado responsable de mascotas."}),e.jsx("div",{className:"space-y-8",children:s.map(a=>e.jsxs("div",{className:"bg-white p-6 rounded-none border border-primary shadow-md",children:[e.jsx("h2",{className:"text-2xl font-semibold text-primary-dark mb-2",children:a.title}),e.jsxs("p",{className:"text-text mb-1",children:[e.jsx("strong",{children:"Fecha:"})," ",a.date]}),e.jsxs("p",{className:"text-text mb-1",children:[e.jsx("strong",{children:"Hora:"})," ",a.time]}),e.jsxs("p",{className:"text-text mb-2",children:[e.jsx("strong",{children:"Ubicación:"})," ",a.location]}),e.jsx("p",{className:"text-text mb-4",children:a.description}),e.jsx(r,{to:`/event/${a.id}`,className:"bg-secondary text-white px-4 py-2 rounded-none border border-primary-dark font-semibold hover:bg-secondary-dark transition duration-300",children:"Más Información"})]},a.id))})]})}export{n as default};