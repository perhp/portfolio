"use client";

import { CategoryBar, Color, MarginTop } from "@tremor/react";

interface CategoryBarProps {
  categoryPercentageValues: number[];
  colors?: Color[];
  percentageValue?: number;
  showLabels?: boolean;
  tooltip?: string;
  showAnimation?: boolean;
  marginTop?: MarginTop;
}

export const CategoryBarWrapper = (props: CategoryBarProps) => {
  return <CategoryBar {...props} />;
};
