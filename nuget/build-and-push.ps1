# 定义参数
Param(
    # Nuget APIKey
    [string] $apikey
)

if ($apikey -eq $null -or $apikey -eq "")
{
    Write-Error "必须指定apiKey";
    return;
}

rm -r ../framework/nupkgs
dotnet build -c Release ../framework/Furion.sln
$files = Get-ChildItem -Path ../framework/nupkgs -Filter *.NS.*-ns*.nupkg
foreach($file in $files)
{
    dotnet nuget push $file.fullName --skip-duplicate --api-key $apikey --source https://api.nuget.org/v3/index.json
}
$files = Get-ChildItem -Path ../framework/nupkgs -Filter *.NS.*-ns*.snupkg
foreach($file in $files)
{
    dotnet nuget push $file.fullName --skip-duplicate --api-key $apikey --source https://api.nuget.org/v3/index.json
}