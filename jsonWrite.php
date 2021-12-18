<?php
        $filePath = "data.json"; // path filename json data file from ESP
        $debug = true; // show data for debugging purposes
        
        // read HTTP request
        // get the payload
		if (!empty($_GET['data'])){
                $data= $_GET['data'];
                if($debug){echo $data;}
                // write json string to harddisk
                jsonWrite($data, $filePath);
			}
        
        function jsonWrite($data, $filePath){
            // write json string to harddisk

            // show json string if debug = true
            if($debug){echo $data;}
            
            $file = fopen($filePath, "w") or die("can't open file");
            fwrite($file, $data); // overwrite existing file
            fclose($file);
        }
?>