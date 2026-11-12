const {driver} = require('../database/neo4jConnection');


//Pais Neo4j
const existePaisPorId = async (id) => {


    // Verificar si el correo existe
    //const existeMultimediaHeroe = await MultimediaHeroe.findById(id);
    //if (!existeMultimediaHeroe) {
    //  throw new Error(`El id no existe ${id}`);
    //}
 
    const session = driver.session();
 
    try {
      const result = await session.run(
        'MATCH (p:Pais {id: $id}) RETURN p',
        { id: id }
      );
      if (!result.records.length) {
        throw new Error(`El id no existe ${id}`);
   
      }
      } catch (error) {
      throw new Error(`Error: ${error.message}`);
    } finally {
      await session.close();
    }
 
 
  };


//Persona Neo4j
const existePersonaPorId = async (id) => {


    // Verificar si el correo existe
    //const existeMultimediaHeroe = await MultimediaHeroe.findById(id);
    //if (!existeMultimediaHeroe) {
    //  throw new Error(`El id no existe ${id}`);
    //}
 
    const session = driver.session();
 
    try {
      const result = await session.run(
        'MATCH (p:Persona {id: $id}) RETURN p',
        { id: id }
      );
      if (!result.records.length) {
        throw new Error(`El id de la Persona no existe ${id}`);
   
      }
      } catch (error) {
      throw new Error(`Error: ${error.message}`);
    } finally {
      await session.close();
    }
 
 
  };


//Persona Neo4j
const noExistePersonaPorId = async (id) => {


    // Verificar si el correo existe
    //const existeMultimediaHeroe = await MultimediaHeroe.findById(id);
    //if (!existeMultimediaHeroe) {
    //  throw new Error(`El id no existe ${id}`);
    //}
 
    const session = driver.session();
 
    try {
      const result = await session.run(
        'MATCH (p:Persona {id: $id}) RETURN p',
        { id: id }
      );
      if (result.records.length) {
        throw new Error(`El id de la Persona ya existe ${id} en la BD`);
   
      }
      } catch (error) {
      throw new Error(`Error: ${error.message}`);
    } finally {
      await session.close();
    }
 
 
  };


  module.exports = {
    existePaisPorId,
    existePersonaPorId,
    noExistePersonaPorId


  };
