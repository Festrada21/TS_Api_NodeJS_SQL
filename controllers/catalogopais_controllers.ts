import {Request,Response} from 'express'
import Pais from '../models/catalogopais';

//TODO: crear los controladores
export const getCatalogopaises = async (req: Request, res: Response) => {
  const pais = await Pais.findAll();
  res.json({ pais });
};

export const getCatalogopais = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const pais = await Pais.findByPk(id);
  if (pais){
    res.json( pais );
  }else{
  return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });	
  }
  
};

export const postCatalogopais = async (req: Request, res: Response) => {
  const { body } = req;
  res.json({ msg: "postCatalogopais", body });
};

export const putCatalogopais = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({ msg: "putCatalogopais", id, body });
  };

  export const deleteCatalogopais = async (req: Request, res: Response) => {
    const { id } = req.params;    
    res.json({ msg: "deleteCatalogopais", id });
  };