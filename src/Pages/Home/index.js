import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { ShiftCard, Loading, Error, Title } from "@components";
import { convertTodaysData } from "@utils";

import { fetchData } from "./api";
import { Container, CardBox, SongTitle, SongBox, InfinityBox } from "./styled";

const Home = () => {
  const [todaysData, setTodaysData] = useState([]);
  const { data, isError, isLoading } = useQuery("today", fetchData);
  const text = "We turn zeros into ones ";

  useEffect(() => {
    if (data) {
      setTodaysData(convertTodaysData(data));
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Container 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .25 }}
    >
      <Title>DISCOGRAPHY</Title>
      <SongBox>
        <SongTitle>0/1/21 - walshy-jamestyberius7.mp3</SongTitle>
        <SongTitle>0/2/21 - Walsh'sOcean.mp3</SongTitle>
        <SongTitle>0/3/21 - thinkinboutyou.mp3</SongTitle>
        <SongTitle>0/4/21 - experiment.mp3</SongTitle>
        <SongTitle>0/5/21 - dreamstate2.mp3</SongTitle>
      </SongBox>
      <InfinityBox>
        {text.repeat(1500)}
      </InfinityBox>
    </Container>
  );
};

export default Home;
