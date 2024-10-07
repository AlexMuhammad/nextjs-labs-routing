import { DUMMY_NEWS, IDummy } from "../dummy-news";

export function getAllNews():IDummy[] {
  return DUMMY_NEWS;
}

export function getLatestNews():IDummy[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce<number[]>((years:any, news:any) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a: number, b: number) => b - a);
}

export function getAvailableNewsMonths(year: string | number): number[] {
  return DUMMY_NEWS.reduce<number[]>((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month: any = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => a - b);
}

export function getNewsForYear(year: string | number): IDummy[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: string | number, month: string | number): IDummy[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}