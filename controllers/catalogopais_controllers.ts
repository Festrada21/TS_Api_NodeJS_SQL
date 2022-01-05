import {Request,Response} from 'express'

//TODO: crear los controladores
export const getCatalogopaises = async (req: Request, res: Response) => {
  res.json({ msg: "getCatalogopaises" });
};

export const getCatalogopais = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ msg: "getCatalogopaises", id });
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