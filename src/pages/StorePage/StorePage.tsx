import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";

import { ApiStrapiUrl } from "@models/urls";

import { CardItem } from "@components/Cards";

export const StorePage: React.FC = () => {
  const queryParams = useLocation().search;

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const category = searchParams.get("category");

  const { data, isSuccess } = useQuery("itemsCount", () =>
    axios
      .get(
        `${ApiStrapiUrl.searchItems().getOrigin()}?filters[title][$containsi]=${search}&populate[category][fields][0]=category&populate[subcategory][fields][0]=subcategory&populate[brand][fields][0]=brand&populate[image][fields][0]=url&pagination[page]=1&pagination[pageSize]=50`
      )
      .then((res) => res.data)
  );

  return (
    <section className="section__default">
      <h2 className="section__title font--primary">Каталог</h2>
      {isSuccess && data.data.map((item) => <CardItem />)}
    </section>
  );
};
