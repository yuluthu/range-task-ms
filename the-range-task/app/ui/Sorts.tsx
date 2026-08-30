"use client"
import Sort from "@/app/ui/Sort";

export default function Sorts({onClick}) {
  return (
      <div className="grid grid-cols-4 gap-4">
        <Sort onClick={() => onClick("price")} label="Sort by Price" />
        <Sort onClick={() => onClick("reviews")} label="Sort by Review" />
        <Sort onClick={() => onClick("name")} label="Sort by Name" />
        <Sort onClick={() => onClick("was_price")} label="Sort by Saving" />
      </div>
  )
}