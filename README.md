**NBL-001** es un proyecto experimental de Creative Technology enfocado en desarrollar un pipeline asistido por inteligencia artificial para la creación de personajes 3D a partir de referencias visuales.

El proyecto integra desarrollo web, inteligencia artificial, prompting, automatización y herramientas de creación 3D dentro de un mismo flujo de trabajo.

Una característica fundamental del proyecto es el **desarrollo asistido mediante prompts para IA**, utilizando instrucciones estructuradas para generar, analizar, mejorar y optimizar componentes del sistema durante las distintas etapas de desarrollo.

El prompting se utiliza como una herramienta de apoyo para explorar soluciones, generar código, analizar problemas técnicos, diseñar estructuras de software y acelerar procesos de experimentación.

El problema que aborda NBL-001 es la cantidad de procesos manuales y repetitivos que pueden existir al transformar una imagen de referencia en un personaje 3D preparado para producción.

El proyecto explora cómo la inteligencia artificial puede colaborar con el proceso creativo y técnico, manteniendo una arquitectura de software que permita integrar progresivamente nuevas herramientas y procesos automatizados.

El flujo conceptual comienza con una imagen de referencia que es cargada mediante una interfaz web y posteriormente procesada dentro del pipeline.

La aplicación utiliza **Node.js y Express.js** como base del backend, proporcionando una arquitectura preparada para gestionar las distintas etapas del procesamiento.

La interfaz web permite seleccionar y cargar imágenes de referencia, que son almacenadas y organizadas dentro de la estructura de assets del proyecto.

La arquitectura se encuentra organizada de manera modular, separando servidor, rutas, controladores, servicios, configuración y utilidades para facilitar su mantenimiento y evolución.

El proyecto incorpora **Blender** como herramienta principal para las etapas relacionadas con creación, procesamiento, materiales, iluminación y renderizado de contenido 3D.

También contempla el uso de **Python** para automatizar procesos dentro de Blender y establecer una comunicación progresiva entre el backend y el entorno 3D.

La integración de IA está orientada al análisis de imágenes, generación asistida mediante prompts, extracción de características visuales, asistencia en la generación de elementos 3D y automatización de diferentes etapas del pipeline.

Actualmente se encuentran implementados el backend inicial con Node.js y Express, la interfaz web, el sistema de carga de imágenes y la gestión de referencias visuales, junto con una metodología de desarrollo asistida mediante IA y prompting.

NBL-001 se encuentra en desarrollo y funciona como un laboratorio tecnológico que investiga la integración entre **IA generativa, prompting, desarrollo de software, automatización y producción 3D**, con el objetivo de construir progresivamente un pipeline reproducible desde una referencia visual hasta un personaje 3D procesado y renderizado.
