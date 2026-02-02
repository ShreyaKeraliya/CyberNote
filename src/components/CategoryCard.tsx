import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/types";
import {getPostCountByCategory} from "@/data/utils";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group cyber-card rounded-lg p-6 transition-all duration-300 hover:translate-y-[-2px]"
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="text-3xl mb-3 block">{category.icon}</span>
          <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {category.description}
          </p>
          <span className="text-xs font-mono text-primary">
            {getPostCountByCategory(category.slug)}{" "}
            {getPostCountByCategory(category.slug) === 1 ? "post" : "posts"}
          </span>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}
