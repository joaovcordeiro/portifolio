export const projectsQuery =
    `query ($limit: IntType, $skip: IntType) {
    allProjetos(first: $limit, skip: $skip, orderBy: data_DESC) {
        nome
    data

    imagem {
            url
            width
            height
    }
    descriO {
        value
    }
    categoria {
        nome
    }
    slug
  }
}`

export const categoryQuery = `query {
    allCategories {
        nome
  }
}`

export const countQuery = `query {
    _allProjetosMeta {
      count
    }
  }`

export const limit = 4;
