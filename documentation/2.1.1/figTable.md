---
layout: oldGuidelines
---
<div xmlns="http://www.w3.org/1999/xhtml">
   <article class="page type-page status-publish hentry">
      <div class="entry-content">
         <div class="panel-grid">
            <div class="panel-grid-cell" style="width: 65%; float: left;">
               <div class="panel widget widget_text panel-first-child panel-last-child">
                  <div class="textwidget">
                     <section class="div1" id="figTable">
                        <header>
                           <h1><span class="headingNumber">13 </span><span class="head">Figures and
                                 Tables</span></h1>
                        </header>
                        <p>Apart from music and text, musical documents, both
                           historical and contemporary, may also contain material in graphical or tabular format.
                           In
                           such materials, details of layout and presentation may also be of comparatively greater
                           significance or complexity than they are for running text. Although some types of
                           graphical material can be represented directly with markup, it is more common practice
                           to
                           include such information by using a reference to an external entity (typically a URL)
                           encoded in a suitable graphical format.
                        </p>
                        <p>The module defined by this chapter defines
                           special purpose ‘container’ elements that can be used to encapsulate occurrences of
                           such
                           data within an MEI-conformant document in a portable way. Specific recommendations
                           for the
                           encoding of figures, figure descriptions and graphics as well as tables with their
                           sub-elements <a class="link_odd_elementSpec" href="/documentation/2.1.1/tr">tr</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/td">td</a> and
                           <a class="link_odd_elementSpec" href="/documentation/2.1.1/th">th</a> are provided at the beginnig of this chapter. As
                           there exists a wide variety of different graphic formats, a short list of formats
                           that are
                           widely used at the present time, is given in section <a class="link_ptr" href="/documentation/2.1.1/figTable#figtableImages" title="Images"><span class="headingNumber">13.1.2
                                 </span>Images</a>. Each one includes a very brief description. The chapter closes with
                           attribute and model classes which are defined by the module.
                        </p>
                        <p>The module described in
                           this chapter makes available the following components:
                        </p>
                        <div class="div2" id="figures">
                           <h2><span class="headingNumber">13.1 </span><span class="head">Figures</span></h2>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/fig">fig</a> element groups elements
                              representing or containing graphic information such as an illustration or figure.
                              This
                              element is modelled on the figure element in the Text Encoding Initiative (TEI). The
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/fig">fig</a> element is used to contain images, captions, and
                              textual descriptions of the pictures. The images themselves are specified using the
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/graphic">graphic</a> element, whose <span class="att">target</span>
                              attribute provides the location of an image. For example:
                           </p>
                           <div id="index.xml-egXML-d39e13306" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;fig&gt;</span><br />   <span data-indentation="2" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">../samples/snippets/mei2012-30shortexamples/beam-grace/grace-300.png</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/fig&gt;</span>     
                           </div>
                           <p>The graphic element may occur
                              multiple times within the markup of the figure in order to indicate the availablity
                              of
                              different image formats or resolutions:
                           </p>
                           <div id="index.xml-egXML-d39e13315" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;fig&gt;</span><br />   <span data-indentation="2" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">../samples/snippets/mei2012-30shortexamples/beam-grace/grace-72.png</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">../samples/snippets/mei2012-30shortexamples/beam-grace/grace-300.png</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">../samples/snippets/mei2012-30shortexamples/beam-grace/grace-600.png</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/fig&gt;</span>     
                           </div>
                           <div class="div3" id="figureCaptionsDescriptions">
                              <h3><span class="headingNumber">13.1.1 </span><span class="head">Figure Captions and Descriptions</span></h3>
                              <p>The element <a class="link_odd_elementSpec" href="/documentation/2.1.1/caption">caption</a> may be used to transcribe (or supply) a title or
                                 descriptive heading for the graphic itself, as in the following example:
                              </p>
                              <div id="index.xml-egXML-d39e13334" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;fig&gt;</span><br />   <span data-indentation="2" class="element">&lt;caption&gt;</span>Grace notes<span data-indentation="2" class="element">&lt;/caption&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">../samples/snippets/mei2012-30shortexamples/beam-grace/grace-300.png</span>"/&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/fig&gt;</span>       
                              </div>
                              <p>The figure description (<a class="link_odd_elementSpec" href="/documentation/2.1.1/figDesc">figDesc</a>) element usually contains a brief prose
                                 description of the appearance or content of a graphic figure, for use when documenting
                                 an image, perhaps without displaying it. This element is intended for use as an
                                 alternative to the content of its parent <a class="link_odd_elementSpec" href="/documentation/2.1.1/fig">fig</a>
                                 element; for example, for display when the equipment in use cannot display graphic
                                 images. It may also be used for indexing or documentary purposes, in which case best
                                 practice suggests the use of controlled vocabulary terms.
                              </p>
                              <div id="index.xml-egXML-d39e13352" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;fig&gt;</span><br />   <span data-indentation="2" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">emblem1.png</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;caption&gt;</span>Emblemi d'Amore<span data-indentation="2" class="element">&lt;/caption&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;figDesc&gt;</span>A pair of naked winged cupids, each holding a flaming torch, in a rural
                                     setting.<span data-indentation="2" class="element">&lt;/figDesc&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/fig&gt;</span>       
                              </div>
                              <p>Occasionally, a figure
                                 description may have a complex structure. In this case, one or more textual component
                                 elements (<a class="link_odd_elementSpec" href="/documentation/2.1.1/p">p</a> (paragraph), <a class="link_odd_elementSpec" href="/documentation/2.1.1/table">table</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/list">list</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/quote">quote</a>, or <a class="link_odd_elementSpec" href="/documentation/2.1.1/lg">lg</a>) may be used to model
                                 the internal structure of the description:
                              </p>
                              <div id="index.xml-egXML-d39e13382" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;fig&gt;</span><br />   <span data-indentation="2" class="element">&lt;caption&gt;</span>Grace notes<span data-indentation="2" class="element">&lt;/caption&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;figDesc&gt;</span><br />     <span data-indentation="3" class="element">&lt;p&gt;</span>The example shows grace notes within beams ...<span data-indentation="3" class="element">&lt;/p&gt;</span><br />     <span data-indentation="3" class="element">&lt;p&gt;</span>This illustration was created by ...<span data-indentation="3" class="element">&lt;/p&gt;</span><br />   <span data-indentation="2" class="element">&lt;/figDesc&gt;</span><br />   <span data-indentation="2" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">../samples/snippets/mei2012-30shortexamples/beam-grace/grace-300.png</span>"/&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/fig&gt;</span>       
                              </div>
                           </div>
                           <div class="div3" id="figtableImages">
                              <h3><span class="headingNumber">13.1.2 </span><span class="head">Images</span></h3>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/graphic">graphic</a> element indicates
                                 the location of an inline graphic, illustration, or figure. As noted above, there
                                 exists a wide variety of different graphics formats, and the following list is in
                                 no
                                 way exhaustive. Moreover, inclusion of any format in this list should not be taken
                                 as
                                 indicating endorsement by the MEI of this format or any products associated with it.
                                 Some of the formats listed here are proprietary to a greater or lesser extent and
                                 cannot therefore be regarded as standards in any meaningful sense. They are, however,
                                 widely used by many different vendors. The following formats are widely used at the
                                 present time, and are likely to remain supported by more than one vendor's
                                 software:
                              </p>
                              <ul>
                                 
                                 <li class="item">BMP: Microsoft bitmap format</li>
                                 
                                 <li class="item">CGM: Computer Graphics Metafile</li>
                                 
                                 <li class="item">GIF: Graphics Interchange Format</li>
                                 
                                 <li class="item">JPEG: Joint Photographic Expert Group</li>
                                 
                                 <li class="item">PBM: Portable Bit Map</li>
                                 
                                 <li class="item">PCX: IBM PC raster format</li>
                                 
                                 <li class="item">PICT: Macintosh drawing format</li>
                                 
                                 <li class="item">PNG: Portable Network Graphics format</li>
                                 
                                 <li class="item">Photo-CD: Kodak Photo Compact Disk format</li>
                                 
                                 <li class="item">QuickTime: Apple real-time image system</li>
                                 
                                 <li class="item">SMIL: Synchronized Multimedia Integration Language format</li>
                                 
                                 <li class="item">SVG: Scalable Vector Graphics format</li>
                                 
                                 <li class="item">TIFF: Tagged Image File Format</li>
                                 
                              </ul>
                              <p>Brief descriptions of all the above are given below. Where possible, current
                                 addresses or other contact information are shown for the originator of each format.
                                 Many formal standards, especially those promulgated by the ISO and many related
                                 national organizations (ANSI, DIN, BSI, and many more), are available from those
                                 national organizations. Addresses may be found in any standard organizational
                                 directory for the country in question.
                              </p>
                              <div class="div4" id="VectorGraphicFormats">
                                 <h4><span class="headingNumber">13.1.2.1 </span><span class="head">Vector Graphic
                                       Formats</span></h4>
                                 <dl>
                                    
                                    <dt><span>CGM: Computer Graphics Metafile</span></dt>
                                    
                                    <dd>- This vector graphics format is specified by an ISO standard, ISO 8632:1987,
                                       amended in 1990. It defines binary, character, and plain-text encodings; the
                                       non-binary forms are safer for blind interchange, especially over networks.
                                       Documentation is available from ISO and from its member national bodies, such as
                                       AFNOR, ANSI, BSI, DIN, JIS, etc.
                                    </dd>
                                    
                                    <dt><span>SVG: Scalable Vector Graphics format</span></dt>
                                    
                                    <dd>- SVG is a language for describing two-dimensional vector and mixed vector or
                                       raster graphics in XML. It is defined by the Scalable Vector Graphics (SVG) 1.0
                                       Specification, W3C Recommendation, 04 September 2001, available at <a class="link_ref" href="http://www.w3.org/TR/2001/REC-SVG-20010904/">http://www.w3.org/TR/2001/REC-SVG-20010904/</a>.
                                    </dd>
                                    
                                    <dt><span>PICT: Macintosh drawing format</span></dt>
                                    
                                    <dd>- This format is universally supported on Macintosh (tm) systems, and readable
                                       by a limited range of software for other systems. Documentation is available from
                                       Apple Computer, Cupertino, California USA.
                                    </dd>
                                    
                                 </dl>
                              </div>
                              <div class="div4" id="RasterGraphicFormats">
                                 <h4><span class="headingNumber">13.1.2.2 </span><span class="head">Raster Graphic Formats</span></h4>
                                 <dl>
                                    
                                    <dt><span>PNG: Portable Network Graphics format</span></dt>
                                    
                                    <dd>- PNG is a non-proprietary raster format currently widely available. It provides
                                       an extensible file format for the losslessly compressed storage of raster images.
                                       Indexed-color, grayscale, and true-color images are supported, plus an optional
                                       alpha channel. Sample depths range from 1 to 16 bits. It is defined by IETF RFC
                                       2083, March 1997.
                                    </dd>
                                    
                                    <dt><span>TIFF: Tagged Image File Format</span></dt>
                                    
                                    <dd>- Currently the most widely supported raster image format, especially for black
                                       and white images, TIFF is also one of the few formats commonly supported on more
                                       than one operating system. The drawback to TIFF is that it actually is a wrapper
                                       for several formats, and some TIFF-supporting software does not support all
                                       variants. TIFF files may use LZW, CCITT Group 4, or PackBits compression methods,
                                       or may use no compression at all. Also, TIFF files may be monochrome, greyscale,
                                       or polychromatic. All such options should be specified in prose at the end of the
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/encodingDesc">encodingDesc</a> section of the MEI header for any
                                       document including TIFF images. TIFF is owned by Aldus Corporation. Documentation
                                       on TIFF is available from the owner at Craigcook Castle, Craigcook Road, Edinburgh
                                       EH4 3UH, Scotland, or 411 First Avenue South, Seattle, Washington 98104 USA.
                                    </dd>
                                    
                                    <dt><span>GIF: Graphics Interchange Format</span></dt>
                                    
                                    <dd>- Raster images are widely available in this form, which was created by
                                       CompuServe Information Services, but has by now been implemented for many other
                                       systems as well. Documentation is copyright by, and is available from, CompuServe
                                       Incorporated, Graphics Technology Department, 5000 Arlington Center Boulevard,
                                       Columbus, Ohio 43220 USA. 
                                    </dd>
                                    
                                    <dt><span>PBM: Portable Bit Map</span></dt>
                                    
                                    <dd>- PBM files are easy to process, eschewing all compression in favor of
                                       transparency of file format. PBM files can, of course, be compressed by generic
                                       file-compression tools for storage and transfer. Public domain software exists
                                       which will convert many other formats to and from PBM. Documentation of PBM is
                                       copyright by Jeff Poskanzer, and is available widely on the Internet.
                                    </dd>
                                    
                                    <dt><span>PCX: IBM PC raster format</span></dt>
                                    
                                    <dd>- This format is used by most IBM PC paint programs, and supports both
                                       monochrome and polychromatic images. Documentation is available from ZSoft
                                       Corporation, Technical Support Department, ATTN: Technical Reference Manual, 450
                                       Franklin Rd. Suite 100, Marietta, GA 30067 USA.
                                    </dd>
                                    
                                    <dt><span>BMP: Microsoft bitmap format</span></dt>
                                    
                                    <dd>- This format is the standard raster format for computer using Microsoft Windows
                                       (tm) or Presentation Manager (tm). Documentation is available from Microsoft
                                       Corporation. 
                                    </dd>
                                    
                                 </dl>
                              </div>
                              <div class="div4" id="PhotographicAndMotionVideoFormats">
                                 <h4><span class="headingNumber">13.1.2.3 </span><span class="head">Photographic and Motion
                                       Video Formats</span></h4>
                                 <dl>
                                    
                                    <dt><span>JPEG: Joint Photographic Experts Group</span></dt>
                                    
                                    <dd>- This format is sponsored by CCITT and by ISO. It is ISO/IEC Draft
                                       International Standard 10918-1, and CCITT T.81. It handles monochrome and
                                       polychromatic images with a variety of compression techniques. JPEG per se, like
                                       CCITT Group IV, must be encapsulated before transmission; this can be done via
                                       TIFF, or via the JPEG File Interchange Format (JFIF), as commonly done for
                                       Internet delivery.
                                    </dd>
                                    
                                    <dt><span>Photo-CD: Kodak Photo Compact Disk format</span></dt>
                                    
                                    <dd>- This format was introduced by Kodak for rasterizing photographs and storing
                                       them on CD-ROMs (about one hundred 35mm file images fit on one disk), for display
                                       on televisions or CD-I systems. Information on Photo-CD is available from Kodak
                                       Limited, Research and Development, Headstone Drive, Harrow, Middlesex HA1 4TY,
                                       UK.
                                    </dd>
                                    
                                 </dl>
                              </div>
                           </div>
                        </div>
                        <div class="div2" id="tables">
                           <h2><span class="headingNumber">13.2 </span><span class="head">Tables</span></h2>
                           <p>The element <a class="link_odd_elementSpec" href="/documentation/2.1.1/table">table</a> contains text displayed in tabular form, i.e., in rows and
                              columns. A table is the least ‘graphic’ of the elements discussed in this chapter.
                              Almost any text structure can be presented as a series of rows and columns: one might,
                              for example, choose to show a glossary or other form of list in tabular form, without
                              necessarily regarding it as a table. When tabular presentation is regarded as of less
                              intrinsic importance, it is correspondingly simpler to encode descriptive or functional
                              information about the contents of the table, for example to identify one cell as
                              containing a name and another as containig a date, though the two methods may be
                              combined.
                           </p>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/table">table</a> element may appear both within
                              other components (such as paragraphs), or between them, provided that the module defined
                              in this chapter has been enabled. It is to a large extent arbitrary whether a table
                              should be regarded as a series of rows or as a series of columns. For compatibility
                              with
                              currently available systems, however, these Guidelines require a row-by-row description
                              of a table.
                           </p>
                           <p>While rows and columns are always encoded in top-to-bottom,
                              left-to-right order, formatting properties such as those provided by CSS may be used
                              to
                              specify that they should be displayed differently.
                           </p>
                           <div class="div3" id="tableRows">
                              <h3><span class="headingNumber">13.2.1 </span><span class="head">Rows</span></h3>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/tr">tr</a> (table row) element is a
                                 formatting element that contains one or more <a class="link_odd_elementSpec" href="/documentation/2.1.1/td">td</a> or
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/th">th</a> elements (cells) in a <a class="link_odd_elementSpec" href="/documentation/2.1.1/table">table</a>. A cell is the intersection of a row and a column. The precise
                                 rendition of the table and its cells should be specified in a style steet.
                              </p>
                              <div id="index.xml-egXML-d39e13537" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;table&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;th <span class="attribute">colspan</span>="<span class="attributevalue">7</span>"&gt;</span>Besetzungen der Triosonate und ihrer Nachfolger<span data-indentation="3" class="element">&lt;/th&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span><br />Triosonate<span data-indentation="4" class="element">&lt;lb/&gt;</span>Standardbes.<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span><br />Triosonate für<span data-indentation="4" class="element">&lt;lb/&gt;</span>Orgel (Bach)<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span><br />Sonate mit obl.<span data-indentation="4" class="element">&lt;lb/&gt;</span>Cembalo (Bach)<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Klaviertrio<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Streichquartett<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Streichtrio<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Oberstimme<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Violine<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Orgel r.H.<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span><br />Violine<span data-indentation="4" class="element">&lt;lb/&gt;</span>(Flöte, Gambe)<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Violine<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Violine<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Violine<span data-indentation="3" class="element">&lt;/td&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Oberstimme<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Violine<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>Orgel l.H.<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Cembalo r.H.<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Klavier r.H.<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Violine<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>harmonische Füllung<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Cembalo r.H.<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Bratsche<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Bratsche<span data-indentation="3" class="element">&lt;/td&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>Bass-Stimme<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Cello<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Orgel Pedal<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Cello<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>Cello<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Cello<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Cello<span data-indentation="3" class="element">&lt;/td&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/table&gt;</span>       
                              </div>
                           </div>
                           <div class="div3" id="tableCells">
                              <h3><span class="headingNumber">13.2.2 </span><span class="head">Cells</span></h3>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/td">td</a> (table data) element
                                 designates a table cell that contains data as opposed to a cell that contains column
                                 or row heading information. The <span class="att">colspan</span> and <span class="att">rowspan</span> attributes provide tabular rendering information. They indicate that
                                 a particular cell or row of a table spans more than one row or column.
                              </p>
                              <div id="index.xml-egXML-d39e13691" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;table&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td <span class="attribute">colspan</span>="<span class="attributevalue">2</span>" <span class="attribute">rowspan</span>="<span class="attributevalue">2</span>"&gt;</span>unmittelbares Schlagen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td <span class="attribute">colspan</span>="<span class="attributevalue">2</span>" <span class="attribute">rowspan</span>="<span class="attributevalue">2</span>"&gt;</span>mittelbares Schlagen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>Gegenschlag<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Aufschlag<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Schütteln<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Schrapen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Stäbe<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Stäbe<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Rahmen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Raspeln<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Platten<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Röhren<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Gefäße<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Räder<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>3. Platten<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>3. Reihen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>4. Gefäße<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/table&gt;</span>       
                              </div>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/th">th</a> (table header) element designates a table cell containing column
                                 or row heading information as opposed to one containing data. The <span class="att">colspan</span> and <span class="att">rowspan</span> attributes tabular display
                                 rendering information. They indicate that a particular cell or row of a table spans
                                 more than one row or column.
                              </p>
                              <div id="index.xml-egXML-d39e13787" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;table&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;th <span class="attribute">colspan</span>="<span class="attributevalue">4</span>"&gt;</span>Systematische Einteilung der Idiophone<span data-indentation="3" class="element">&lt;/th&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td <span class="attribute">colspan</span>="<span class="attributevalue">2</span>"&gt;</span>unmittelbares Schlagen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td <span class="attribute">colspan</span>="<span class="attributevalue">2</span>"&gt;</span>mittelbares Schlagen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Gegenschlag<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Aufschlag<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>Schütteln<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>Schrapen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Stäbe<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Stäbe<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Rahmen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>1. Raspeln<span data-indentation="3" class="element">&lt;/td&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Platten<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Röhren<span data-indentation="3" class="element">&lt;/td&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Gefäße<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>2. Räder<span data-indentation="3" class="element">&lt;/td&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>3. Platten<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>3. Reihen<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;tr&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />     <span data-indentation="3" class="element">&lt;td&gt;</span>4. Gefäße<span data-indentation="3" class="element">&lt;/td&gt;</span><br />     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;td/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/tr&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/table&gt;</span>       
                              </div>
                           </div>
                        </div>
                     </section>
                  </div>
               </div>
            </div>
            <div class="panel-grid-cell" style="width: 35%; float: left;">
               <div class="panel widget widget_text panel-first-child panel-last-child">
                  <header class="entry-header">
                     <h1 class="entry-title">
                        MEI Guidelines <small>Version 2.1.1</small></h1>
                  </header>
                  <div class="textwidget">
                     <ul class="guidelinesList">
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/chapters">MEI Guidelines</a></li>
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/elements">Elements</a></li>
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/atts">Attributes</a></li>
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/models">Model Classes</a></li>
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/data">Data Types</a></li>
                     </ul>
                  </div>
                  <div style="margin: 10px 30px; border-bottom: 0.5px solid #666666; height: 1px;"></div>
                  <h3 class="widget-title">Table of Contents</h3>
                  <div class="textwidget">
                     <ul class="guidelinesList">
                        <li><a href="/documentation/2.1.1/figTable#"><span class="headingNumber">13 </span><span class="head">Figures and
                                 Tables</span></a></li>
                        <li><a href="/documentation/2.1.1/figTable#figures"><span class="headingNumber">13.1 </span><span class="head">Figures</span></a></li>
                        <li><a href="/documentation/2.1.1/figTable#figureCaptionsDescriptions"><span class="headingNumber">13.1.1 </span><span class="head">Figure Captions and Descriptions</span></a></li>
                        <li><a href="/documentation/2.1.1/figTable#figtableImages"><span class="headingNumber">13.1.2 </span><span class="head">Images</span></a></li>
                        <li><a href="/documentation/2.1.1/figTable#VectorGraphicFormats"><span class="headingNumber">13.1.2.1 </span><span class="head">Vector Graphic
                                 Formats</span></a></li>
                        <li><a href="/documentation/2.1.1/figTable#RasterGraphicFormats"><span class="headingNumber">13.1.2.2 </span><span class="head">Raster Graphic Formats</span></a></li>
                        <li><a href="/documentation/2.1.1/figTable#PhotographicAndMotionVideoFormats"><span class="headingNumber">13.1.2.3 </span><span class="head">Photographic and Motion
                                 Video Formats</span></a></li>
                        <li><a href="/documentation/2.1.1/figTable#tables"><span class="headingNumber">13.2 </span><span class="head">Tables</span></a></li>
                        <li><a href="/documentation/2.1.1/figTable#tableRows"><span class="headingNumber">13.2.1 </span><span class="head">Rows</span></a></li>
                        <li><a href="/documentation/2.1.1/figTable#tableCells"><span class="headingNumber">13.2.2 </span><span class="head">Cells</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>