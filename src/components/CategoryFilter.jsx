
const categories = [
  'All',
  'T-Shirts',
  'Pants',
  'Sets',
  'Caps',
  'Accessories'
]

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filters">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
