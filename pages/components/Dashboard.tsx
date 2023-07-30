import React, { useState, useId } from "react";
import { Grid } from "@chakra-ui/react";
import PostCard from "../common/PostCard";
import Upload from "./Upload";


interface FilePost {
  file: File ;
} 
const Dashboard = () => {
  const [file, setFile] = useState<FilePost[]>([]);

  return (
    <div style={{paddingBottom:"40px"}}>
      <Upload file={file} setFile={setFile} />
      <Grid
        mt="25px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {file.map((post: any, index: number) => (
          <PostCard key={index} post={post} />
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
