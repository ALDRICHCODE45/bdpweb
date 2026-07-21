import {
  Clock,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  extended: {
    overview: string;
    deliverables: string[];
  };
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  sector: string;
  before: {
    label: string;
    figure: string;
    detail: string;
  };
  after: {
    label: string;
    figure: string;
    detail: string;
  };
  context: string;
  outcome: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    id: "auditoria-fiscalizacion",
    icon: Search,
    title: "Auditoría interna y fiscalización preventiva",
    summary:
      "Revisamos procesos, evidencia y controles antes de que una observación se convierta en una contingencia.",
    extended: {
      overview:
        "Diseñamos revisiones con enfoque COSO y NIA para identificar brechas de control, documentar evidencia suficiente y preparar a la organización para una fiscalización efectiva.",
      deliverables: [
        "Programa de auditoría y matriz de hallazgos priorizados.",
        "Recomendaciones accionables para responsables y plazos.",
        "Acompañamiento en la atención y cierre de observaciones.",
      ],
    },
  },
  {
    id: "control-interno",
    icon: Shield,
    title: "Diseño y fortalecimiento de control interno",
    summary:
      "Convertimos políticas y obligaciones en controles que las personas pueden ejecutar y demostrar.",
    extended: {
      overview:
        "Evaluamos el ambiente de control, los flujos de autorización y la segregación de funciones para fortalecer el sistema bajo COSO 2013 y las exigencias aplicables a la Administración Pública Federal.",
      deliverables: [
        "Mapa de procesos, riesgos y controles clave.",
        "Políticas, matrices de responsabilidades y evidencias mínimas.",
        "Capacitación para operar y monitorear los controles.",
      ],
    },
  },
  {
    id: "compliance-regulatorio",
    icon: ShieldCheck,
    title: "Programas de cumplimiento regulatorio (Compliance)",
    summary:
      "Construimos programas proporcionales al riesgo para prevenir, detectar y responder a incumplimientos.",
    extended: {
      overview:
        "Alineamos el programa con la Ley General de Responsabilidades Administrativas, las obligaciones sectoriales y buenas prácticas como ISO 37301, sin convertir el cumplimiento en burocracia desconectada del negocio.",
      deliverables: [
        "Código, políticas y controles de integridad adaptados al riesgo.",
        "Canales de reporte, protocolos de investigación y remediación.",
        "Indicadores para demostrar mejora continua ante terceros y autoridades.",
      ],
    },
  },
  {
    id: "riesgos-legales",
    icon: TrendingUp,
    title: "Gestión de riesgos legales y mapa de exposición",
    summary:
      "Hacemos visible dónde puede materializarse el riesgo y qué decisión reduce primero la exposición.",
    extended: {
      overview:
        "Integramos obligaciones, procesos, terceros y antecedentes para construir un mapa de exposición legal que permita asignar recursos y tomar decisiones con evidencia.",
      deliverables: [
        "Inventario de obligaciones y evaluación de probabilidad e impacto.",
        "Mapa de calor y registro de riesgos con responsables.",
        "Plan de tratamiento, seguimiento y actualización periódica.",
      ],
    },
  },
  {
    id: "defensa-responsabilidades",
    icon: Scale,
    title: "Defensa en procedimientos de responsabilidades administrativas",
    summary:
      "Protegemos los derechos de la organización y de las personas servidoras públicas durante todo el procedimiento.",
    extended: {
      overview:
        "Analizamos citatorios, expedientes y pruebas para construir una estrategia de defensa técnica ante la SFP, órganos internos de control, tribunales y demás autoridades competentes.",
      deliverables: [
        "Revisión de expediente, plazos y posibles líneas de defensa.",
        "Preparación de manifestaciones, pruebas y alegatos.",
        "Representación y seguimiento hasta la resolución o impugnación.",
      ],
    },
  },
  {
    id: "peritaje-fiscalizaciones",
    icon: Clock,
    title: "Peritaje y acompañamiento en fiscalizaciones en curso",
    summary:
      "Respondemos con rapidez cuando la autoridad ya está revisando la operación y cada documento importa.",
    extended: {
      overview:
        "Nos incorporamos a fiscalizaciones de la ASF y otras autoridades para ordenar la respuesta, validar la trazabilidad documental y evitar que una diferencia técnica escale a responsabilidad.",
      deliverables: [
        "Diagnóstico urgente de requerimientos y documentación disponible.",
        "Peritajes, informes técnicos y reconstrucción de operaciones.",
        "Coordinación de equipos internos, auditores y asesores externos.",
      ],
    },
  },
];

export const advantages: Advantage[] = [
  {
    id: "prevencion",
    title: "Prevenir antes de corregir",
    description:
      "Detectamos señales tempranas y priorizamos acciones antes de que una observación afecte la operación, la reputación o el patrimonio.",
  },
  {
    id: "tecnica-juridica",
    title: "Técnica que entiende el negocio",
    description:
      "Combinamos criterio jurídico, auditoría y gestión de riesgos para que cada recomendación pueda implementarse y medirse.",
  },
  {
    id: "evidencia",
    title: "Evidencia que resiste",
    description:
      "Ordenamos la trazabilidad de decisiones, controles y documentos para responder con claridad frente a autoridades y terceros.",
  },
  {
    id: "defensa-integral",
    title: "Defensa de principio a fin",
    description:
      "Acompañamos desde el diagnóstico preventivo hasta la defensa administrativa, con una estrategia coordinada y proporcional al riesgo.",
  },
];

export const steps: TimelineStep[] = [
  {
    id: "diagnostico",
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos la operación, sus obligaciones y los puntos donde una desviación puede generar exposición.",
  },
  {
    id: "priorizacion",
    number: "02",
    title: "Priorización",
    description:
      "Ordenamos riesgos por impacto, probabilidad y urgencia para enfocar recursos en lo que realmente importa.",
  },
  {
    id: "implementacion",
    number: "03",
    title: "Implementación",
    description:
      "Diseñamos controles, políticas y respuestas que se integran a los procesos cotidianos de la organización.",
  },
  {
    id: "acompanamiento",
    number: "04",
    title: "Acompañamiento",
    description:
      "Medimos avances, cerramos brechas y permanecemos cerca cuando llega una auditoría o un procedimiento.",
  },
];

export const timelineSteps = steps;

export const cases: CaseStudy[] = [
  {
    id: "construccion",
    title: "Observaciones ASF en construcción",
    sector: "Sector construcción",
    before: {
      label: "Exposición inicial",
      figure: "$15 MDP",
      detail: "Observaciones de la ASF con impacto potencial en la operación.",
    },
    after: {
      label: "Resultado",
      figure: "90% resuelto",
      detail: "Observaciones atendidas y responsabilidad evitada.",
    },
    context:
      "Reconstruimos la trazabilidad de contratos, entregables y autorizaciones para responder técnicamente a cada observación.",
    outcome:
      "La intervención permitió resolver 90% de las observaciones y evitar que el expediente derivara en responsabilidad administrativa.",
  },
  {
    id: "farmaceutica",
    title: "Integridad en empresa farmacéutica",
    sector: "Industria farmacéutica",
    before: {
      label: "Punto de partida",
      figure: "Sin compliance",
      detail: "Controles dispersos y exposición frente a obligaciones sectoriales.",
    },
    after: {
      label: "Resultado",
      figure: "Programa certificado",
      detail: "Sistema de cumplimiento documentado y operable.",
    },
    context:
      "Convertimos obligaciones regulatorias, riesgos de terceros y canales de denuncia en un programa de integridad con responsables claros.",
    outcome:
      "La organización obtuvo un programa certificado y una estructura de prevención que funciona como factor mitigante.",
  },
  {
    id: "servidor-publico",
    title: "Defensa de persona servidora pública",
    sector: "Responsabilidad administrativa",
    before: {
      label: "Riesgo acumulado",
      figure: "10 años",
      detail: "Exposición derivada de una actuación administrativa de larga data.",
    },
    after: {
      label: "Resultado",
      figure: "Sanción mínima",
      detail: "Conducta negociada como no grave con respuesta proporcional.",
    },
    context:
      "Analizamos la temporalidad, la evidencia y el grado de participación para construir una defensa centrada en proporcionalidad y debido proceso.",
    outcome:
      "La estrategia permitió negociar la clasificación como falta no grave y obtener la sanción mínima aplicable.",
  },
];

export const team: TeamMember[] = [
  {
    id: "direccion-cumplimiento",
    name: "Dirección de Cumplimiento",
    role: "Estrategia y gobierno del programa",
    description:
      "Define prioridades, coordina a las áreas involucradas y traduce obligaciones complejas en decisiones ejecutables.",
  },
  {
    id: "auditoria-fiscalizacion",
    name: "Auditoría y Fiscalización",
    role: "Control, evidencia y respuesta técnica",
    description:
      "Revisa procesos y documentos con metodología de auditoría para anticipar hallazgos y sostener respuestas frente a la autoridad.",
  },
  {
    id: "defensa-administrativa",
    name: "Defensa Administrativa",
    role: "Procedimientos y responsabilidades",
    description:
      "Construye la estrategia procesal, protege derechos y acompaña cada etapa de investigaciones y procedimientos administrativos.",
  },
  {
    id: "riesgos-regulatorios",
    name: "Riesgos Regulatorios",
    role: "Mapeo y mejora continua",
    description:
      "Conecta el mapa de exposición con indicadores, controles y planes de remediación que pueden mantenerse en el tiempo.",
  },
];

export const faq: FAQItem[] = [
  {
    id: "auditoria-vs-financiera",
    question: "¿Qué diferencia una auditoría de cumplimiento de una financiera?",
    answer:
      "Una auditoría financiera se concentra en si los estados y registros reflejan razonablemente la situación económica de una organización. Una auditoría de cumplimiento revisa si las decisiones, procesos y controles se ajustan a las leyes, regulaciones, contratos y políticas que les resultan aplicables. Puede identificar riesgos de responsabilidad administrativa, sanciones o pérdida de beneficios aun cuando las cifras financieras sean correctas. Ambas revisiones se complementan: una valida los números y la otra demuestra que la operación se realizó conforme al marco que la gobierna.",
  },
  {
    id: "programa-integridad",
    question: "¿Mi empresa está obligada a tener un programa de integridad?",
    answer:
      "No existe una obligación única que aplique de la misma manera a todas las empresas. La exigencia puede depender del sector, de los contratos celebrados con entidades públicas, de la regulación aplicable, del tamaño de la organización y de su exposición a terceros. Sin embargo, contar con políticas, controles, capacitación, canal de denuncias y mecanismos de investigación ayuda a prevenir conductas indebidas y puede ser un factor relevante para acreditar una cultura de cumplimiento. Evaluamos tu operación para definir un programa proporcional, útil y demostrable.",
  },
  {
    id: "citatorio-contraloria",
    question: "¿Qué debo hacer si ya recibí un citatorio de la Contraloría?",
    answer:
      "No lo ignores ni esperes al último día. Conserva el citatorio y todos los documentos relacionados, identifica con precisión los plazos y solicita asesoría antes de rendir declaraciones o entregar información. Revisamos el expediente, verificamos la competencia de la autoridad, definimos una estrategia de respuesta y organizamos las pruebas necesarias. Una reacción ordenada desde el primer requerimiento protege tus derechos y evita que errores de forma o información incompleta compliquen la defensa.",
  },
  {
    id: "outsourcing-oficial",
    question: "¿Ofrecen outsourcing del oficial de cumplimiento?",
    answer:
      "Ofrecemos acompañamiento externo, diseño de programas y soporte especializado para la función de cumplimiento, incluso bajo esquemas fraccionados cuando el tamaño o la etapa de la organización lo justifica. El alcance se define según el riesgo y la regulación aplicable. La asesoría externa no sustituye las responsabilidades legales de los órganos de gobierno ni elimina la necesidad de que la organización asigne responsables internos; trabajamos con tu equipo para dejar capacidades, controles y evidencia que permanezcan.",
  },
];

export const faqItems = faq;
