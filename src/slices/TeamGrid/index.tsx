import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { createClient } from "../../prismicio";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import React from "react";
import { Skater } from "./Skater";
import { SlideIn } from "../../components/SlideIn";
import { TeamGridSlice, SkaterDocument } from "../../../prismicio-types";

/**
 * Props for `TeamGrid`.
 */
export type TeamGridProps = SliceComponentProps<TeamGridSlice>;

/**
 * Component for "TeamGrid" Slices.
 */
const TeamGrid = async ({ slice }: TeamGridProps) => {
  const client = createClient();
  const skaters = await client.getAllByType<SkaterDocument>("skater");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-navy"
    >
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <React.Fragment key={index}>
            {skater.data.first_name && (
              <SlideIn>
                <Skater index={index} skater={skater} />
              </SlideIn>
            )}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
