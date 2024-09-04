'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '@/store/articleSlice';
import { HomeBanner } from "@/components/HomeBanner";
import { AllServicesBtn } from "@/components/AllServicesBtn";
import { ClientPhotos } from "@/components/ClientPhotos";
import { ClientLogo } from "@/components/ClientLogo";
import { WhyUs } from "@/components/WhyUs";
import { ArticleReccomendation } from "@/components/ArticleComponent/ArticleReccomendation";
import { SkeletonReccomendation } from '@/components/Skeleton/SekeletonReccomendation';
import { WebWork } from '@/components/WebComponents/WebWork';
import { SocmedWork } from '@/components/SocmedComponents/SocmedWork';


export default function Home() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles(6));
  }, [dispatch]);

  return (
    <>
      <HomeBanner />
      <AllServicesBtn />
      <ClientPhotos />
      <WebWork />
      <SocmedWork />
      <WhyUs />
      <ClientLogo />
      {error ? (
        <div>Error: {error}</div>
      ) : loading ? (
        <SkeletonReccomendation />
      ) : (
        <ArticleReccomendation data={articles} />
      )}
    </>
  );
}
