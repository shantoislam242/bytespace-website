import CategoryCard from "@/components/ui/CategoryCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";

export default function LearningPaths() {
  return (
    <section className="container-page pt-[72px] pb-[120px]">
      <SectionHeading
        size="s"
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      <div className="mt-[68px] grid grid-cols-2 gap-5 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-0">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
}
