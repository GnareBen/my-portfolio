import {
  FaCode,
  FaMobileAlt,
  FaNetworkWired,
  FaDatabase,
  FaTasks,
  FaShieldAlt,
} from "react-icons/fa";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Développement Web Full Stack",
      description:
        "Développement d'applications web modernes et performantes en gérant l'ensemble du processus, du frontend au backend. Utilisation de technologies comme Laravel, Next.js, et Spring Boot pour concevoir des solutions complètes adaptées aux besoins spécifiques.",
      icon: (
        <FaCode className="w-10 h-10 text-green-600 lg:w-12 lg:h-12 dark:text-green-300" />
      ),
    },
    {
      id: 2,
      title: "Développement d'Applications Mobiles",
      description:
        "Conception et développement d'applications mobiles performantes pour Android et iOS, utilisant Flutter pour une expérience utilisateur fluide et une compatibilité multiplateforme.",
      icon: (
        <FaMobileAlt className="w-10 h-10 text-green-600 lg:w-12 lg:h-12 dark:text-green-300" />
      ),
    },
    {
      id: 3,
      title: "API REST et GraphQL",
      description:
        "Création d'API robustes et sécurisées en REST ou GraphQL pour faciliter la communication entre applications. Les API sont conçues pour être évolutives, sécurisées et optimisées pour une gestion efficace des données.",
      icon: (
        <FaNetworkWired className="w-10 h-10 text-green-600 lg:w-12 lg:h-12 dark:text-green-300" />
      ),
    },
    {
      id: 4,
      title: "Gestion de bases de données",
      description:
        "Conception et optimisation de bases de données relationnelles comme MySQL et PostgreSQL pour assurer une gestion des données fiable et performante. Mise en place des meilleures pratiques pour la sécurité et l'efficacité des systèmes de gestion de bases de données.",
      icon: (
        <FaDatabase className="w-10 h-10 text-green-600 lg:w-12 lg:h-12 dark:text-green-300" />
      ),
    },
    // {
    //   id: 5,
    //   title: "Développement d'Interfaces Utilisateur (UI/UX)",
    //   description:
    //     "Conception d'interfaces utilisateur intuitives et esthétiques, axées sur une expérience utilisateur fluide. Interfaces responsive et optimisées pour une utilisation sur tous types d'écrans, y compris les appareils mobiles.",
    //   icon: (
    //     <FaPalette className="w-10 h-10 text-green-600 lg:w-12 lg:h-12 dark:text-green-300" />
    //   ),
    // },
    {
      id: 6,
      title: "Gestion de projets et maintenance",
      description:
        "Prise en charge de la maintenance et des améliorations continues des projets existants. Suivi des tâches et gestion des projets via des outils tels que Jira et Trello, assurant ainsi un bon déroulement des développements.",
      icon: (
        <FaTasks className="w-10 h-10 text-green-600 lg:w-12 lg:h-12 dark:text-green-300" />
      ),
    },
    {
      id: 7,
      title: "Sécurité des applications",
      description:
        "Mise en place de solutions de sécurité pour protéger les applications et les données sensibles. Intégration de systèmes d'authentification sécurisés comme OAuth ou JWT pour garantir la confidentialité et la protection des utilisateurs.",
      icon: (
        <FaShieldAlt className="w-10 h-10 text-green-600 lg:w-12 lg:h-12 dark:text-green-300" />
      ),
    },
    // {
    //   id: 8,
    //   title: "Cloud et DevOps",
    //   description:
    //     "Déploiement d'applications sur des plateformes cloud comme AWS et Google Cloud. Mise en place de pipelines CI/CD pour une livraison continue et automatisée, assurant une gestion fluide des applications dans le cloud.",
    //   icon: (
    //     <FaCloud className="w-10 h-10 text-green-600 lg:w-12 lg:h-12 dark:text-green-300" />
    //   ),
    // },
  ];

  return (
    <>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl xl:tex-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Mes Services
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {services.map((service) => (
            <div key={service.id}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      ;
    </>
  );
};

export default Service;
