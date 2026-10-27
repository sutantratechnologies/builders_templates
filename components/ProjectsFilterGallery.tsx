"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { siteConfig, ProjectItem } from "@/src/config";
import {
  MapPin,
  CheckCircle,
  Clock,
  Building2,
  Calendar,
  Search,
  ExternalLink,
  X,
} from "lucide-react";

export const ProjectsFilterGallery = () => {
  const [selectedSector, setSelectedSector] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const sectors = ["All", "Commercial", "Residential", "Institutional", "Infrastructure"];
  const statuses = ["All", "Completed", "Ongoing"];

  const filteredProjects = useMemo(() => {
    return siteConfig.projects.filter((project) => {
      const matchesSector =
        selectedSector === "All" || project.sector === selectedSector;
      const matchesStatus =
        selectedStatus === "All" || project.category === selectedStatus;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.scope.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSector && matchesStatus && matchesSearch;
    });
  }, [selectedSector, selectedStatus, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Modern Filter and Search Control Bar */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Main Sector Tab Filter with Rounded Pills */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block">
              Filter by Sector:
            </span>
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => {
                const isActive = selectedSector === sector;
                return (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => setSelectedSector(sector)}
                    className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                      isActive
                        ? "bg-[#e2181d] text-white shadow-xs"
                        : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    {sector}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Status Filter */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block">
              Status:
            </span>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => {
                const isActive = selectedStatus === status;
                return (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                      isActive
                        ? "bg-slate-800 text-white font-semibold shadow-xs"
                        : "bg-slate-50 text-slate-500 border border-slate-200 hover:text-slate-800"
                    }`}
                  >
                    {status}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Search & Counter */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, city, or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium self-end sm:self-center">
            Showing <strong className="text-slate-950 font-bold">{filteredProjects.length}</strong> of{" "}
            <strong className="text-slate-950 font-bold">{siteConfig.projects.length}</strong> Landmark Executions
          </div>
        </div>
      </div>

      {/* Visual CSS Grid Portfolio */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white rounded-3xl border-2 border-dashed border-slate-200 p-16 text-center space-y-3">
          <Building2 className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">
            No projects matched your filter criteria
          </h3>
          <p className="text-xs text-slate-500">
            Try adjusting your sector or status filters, or clear your search query.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedSector("All");
              setSelectedStatus("All");
              setSearchQuery("");
            }}
            className="px-5 py-2 bg-slate-950 text-white font-semibold text-xs rounded-full hover:bg-slate-800 transition-colors mt-2"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="group bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden p-3.5 cursor-pointer"
              onClick={() => setActiveModalProject(project)}
            >
              {/* Image Container with rounded-2xl */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-75" />

                {/* Status Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                      project.category === "Completed"
                        ? "bg-slate-950/80 backdrop-blur-md text-white border border-white/20"
                        : "bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200"
                    }`}
                  >
                    {project.category === "Completed" ? (
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Clock className="w-3 h-3 text-amber-500" />
                    )}
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/80 backdrop-blur-md text-slate-800 border border-white/30">
                    {project.sector}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-1.5 text-xs text-white font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Client: {project.client}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-slate-700 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{project.completionYear}</span>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-slate-900 font-semibold hover:text-slate-600 text-xs"
                  >
                    <span>View Specifications</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modern Rounded Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-white rounded-3xl border border-slate-200 text-slate-900 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-4 sm:p-6 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-md text-slate-800 p-2 rounded-full hover:bg-slate-950 hover:text-white transition-colors shadow-md"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-3.5 py-1 rounded-full bg-slate-950 text-white text-xs font-semibold">
                  {activeModalProject.sector}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-semibold border border-slate-200">
                  {activeModalProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 px-2">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  Project Dossier • Handover: {activeModalProject.completionYear}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 mt-1">
                  {activeModalProject.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Location</span>
                  <span className="text-slate-900 font-semibold">{activeModalProject.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Client / Owner</span>
                  <span className="text-slate-900 font-semibold">{activeModalProject.client}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                  Technical Engineering Scope:
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {activeModalProject.scope}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed pt-2">
                  Constructed under direct supervisory control of Lumbini Builders
                  Resident Structural Engineers. Fully validated with third-party concrete
                  compression testing and NBC 105:2020 seismic adherence.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Have a similar commercial or infrastructure requirement?
                </span>
                <a
                  href={`/contact?project=${encodeURIComponent(activeModalProject.title)}`}
                  className="px-6 py-2.5 bg-[#e2181d] text-white rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#c41418] transition-colors shadow-xs"
                >
                  Inquire For Similar Build
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
